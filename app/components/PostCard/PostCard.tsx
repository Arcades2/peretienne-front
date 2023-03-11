import { Link } from '@remix-run/react';
import type { Post } from '~/types';
import dayjs from 'dayjs';
import TagList from '../TagList';

type Props = {
  post: Post;
};

function PostCard({ post }: Props) {
  const { slug, title, subtitle, publishedAt, readingTime } = post.attributes;
  return (
    <li className="py-8">
      <Link to={slug} className="text-teal-400 hover:underline font-bold mb-8">
        <h2>{title}</h2>
      </Link>
      <p className="text-xs mt-4">
        {dayjs(publishedAt).format('YYYY/MM/DD')} - ⏲️ {readingTime} min read
      </p>
      <p className="text-lg">{subtitle}</p>
      {!!post.attributes.tags.length && <TagList tags={post.attributes.tags} />}
    </li>
  );
}

export default PostCard;
