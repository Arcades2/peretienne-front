import type { Tag } from '~/types';

type TagListProps = {
  tags: Tag[];
};

export default function TagList({ tags }: TagListProps) {
  return (
    <>
      {tags.map((tag) => (
        <span key={tag.id} className="text-rose-300 text-sm mr-2">
          {tag.attributes.name}
        </span>
      ))}
    </>
  );
}
