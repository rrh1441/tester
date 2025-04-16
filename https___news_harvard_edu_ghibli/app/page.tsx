
import Link from 'next/link';
import { PostCard } from '@/components/post-card';

const homepagePosts = [{"id":407116,"title":"Hunting a basic building block of universe","link":"https://news.harvard.edu/gazette/story/2025/04/hunting-a-basic-building-block-of-universe/","excerpt":"<p>Researchers find way to confirm existence of axions, which make up dark matter</p>\n","featuredMediaUrl":"https://news.harvard.edu/wp-content/uploads/2025/04/04092025_Axion_Quasiparticles_Discovered_0041.jpg","authorName":"Terry Murphy","date":"2025-04-16T11:00:00"},{"id":407196,"title":"‘This is weakening the United States.’","link":"https://news.harvard.edu/gazette/story/2025/04/this-is-weakening-the-united-states/","excerpt":"<p>Scholars react to Trump administration actions against Harvard and other institutions</p>\n","featuredMediaUrl":"https://news.harvard.edu/wp-content/uploads/2025/04/campus-reax-1920.jpg","authorName":"Anna Lamb","date":"2025-04-15T18:20:26"},{"id":407179,"title":"The food was good. The conversation was better.","link":"https://news.harvard.edu/gazette/story/2025/04/our-harvard-brings-students-together-to-tackle-tough-issues/","excerpt":"<p>‘Our Harvard’ brings students together to tackle tough issues </p>\n","featuredMediaUrl":"https://news.harvard.edu/wp-content/uploads/2025/04/040125_Food_For_Thought_0589.jpg","authorName":"Terry Murphy","date":"2025-04-15T16:22:00"}];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-green-500 font-mono relative overflow-hidden p-4 md:p-8">
      <div className="container mx-auto py-8 relative z-10">
        <h1 className="text-2xl font-bold mb-6">Latest Posts</h1>
        <div className="grid gap-6">
          {homepagePosts.map((post) => (
            <PostCard
              key={post.id}
              slug={`/posts/${post.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`}
              title={post.title}
              date={post.date}
              author={post.authorName}
              excerpt={post.excerpt}
              featuredImage={post.featuredMediaUrl}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
