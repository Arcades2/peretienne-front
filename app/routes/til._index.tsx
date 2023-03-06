import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import PostCard from '~/components/PostCard';
import { strapiResponseSchema, postSchema } from '~/types';
import axios from 'lib/axios';

export const loader = async () => {
  const postRes = await axios.get('/posts', {
    params: {
      sort: ['publishedAt:desc'],
      populate: ['tags'],
    },
  });

  const posts = strapiResponseSchema(postSchema).parse(postRes.data);

  return json(
    {
      posts,
    },
    {
      headers: {
        'Cache-Control':
          'max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
      },
    },
  );
};

function TILPage() {
  const {
    posts: { data: posts },
  } = useLoaderData<typeof loader>();

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Today I Learned
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Just a way to share what I learn every day.
        </p>
      </div>
      <div className="mt-3">
        <ul className="divide-y-2">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TILPage;
