import type { ReactNode } from 'react';
import type { LinksFunction, LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { strapiResponseSchema, postSchema } from '~/types';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import axios from 'lib/axios';
import TagList from '~/components/TagList';

export const loader = async ({ params }: LoaderArgs) => {
  const postRes = await axios.get('/posts', {
    params: {
      filters: {
        slug: {
          $eq: params.slug,
        },
      },
      populate: ['tags'],
    },
  });

  const posts = strapiResponseSchema(postSchema).parse(postRes.data);

  return json(
    {
      post: posts.data[0],
    },
    {
      headers: {
        'Cache-Control':
          'max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
      },
    },
  );
};

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark.min.css',
  },
];

function TargetBlankLink({
  children,
  ...props
}: {
  children: ReactNode;
  [propName: string]: any;
}) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function PostPage() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <div className="prose md:prose-xl prose-invert">
      <h1>{post.attributes.title}</h1>
      <h2>{post.attributes.subtitle}</h2>
      {!!post.attributes.tags.length && <TagList tags={post.attributes.tags} />}
      <div className="h-1 w-4/5 bg-rose-300 mx-auto my-8" />
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        components={{
          a: TargetBlankLink,
        }}
      >
        {post.attributes.content}
      </ReactMarkdown>
    </div>
  );
}

export default PostPage;
