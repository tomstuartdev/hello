"use client";

export default function PostsList({
  posts,
  selectedCategory,
}: {
  posts: Post[];
  selectedCategory: string;
}) {
  const filteredPosts = posts.filter(
    (post) => post.category === selectedCategory,
  );

  return (
    <div className="md:grow -my-5 space-y-4">
      {filteredPosts.map((post) => {
        return (
          <article
            key={post.id}
            className="relative pl-12 pr-4 sm:pl-28 py-5 group before:absolute before:left-8 sm:before:left-24 before:right-0 before:inset-y-0 before:bg-gradient-to-tr before:from-black/70 before:to-black/90 before:dark:bg-gradient-to-b before:dark:from-neutral-900/70 before:dark:to-neutral-900/80 before:rounded-lg before:shadow before:shadow-black/5 before:-z-10 even:before:opacity-50"
          >
            {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
            <header className="flex flex-col sm:flex-row items-start mb-2 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[calc(100%+1rem)] before:pl-px before:bg-lime-300/50 dark:before:bg-lime-300/15 sm:before:ml-[4.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-lime-400 after:rounded-full sm:after:ml-[4.5rem] after:-translate-x-1/2 after:translate-y-2">
              <time className="sm:absolute left-0 inline-flex items-center justify-center text-sm font-medium w-14 h-6 mb-3 sm:mb-0 h2 uppercase text-white dark:text-black bg-black dark:bg-[#A8FF00] rounded-lg">
                {post.date}
              </time>
              <div className="flex flex-col w-full">
              <img className="shrink-0 w-full flex mb-8"
                src={post.bannerImg}
                width={32}
                height={32}
                alt={post.author}></img>
              <h2 className="text-3xl uppercase leading-6 font-semibold text-[#A8FF00] h2 dark:text-[#A8FF00]">
                {post.title}
              </h2>
              </div>
            </header>
            {/* Content */}
            <div className="mb-4">
              
              <p className="text-white font-regular dark:text-neutral-100">{post.content}</p>
              
            </div>
            <footer className="flex items-center space-x-3">
              <img
                className="shrink-0 rounded-full"
                src={post.authorImage}
                width={32}
                height={32}
                alt={post.author}
              />
              <div className="text-sm font-medium text-white dark:text-gray-200">
                {post.author}
              </div>
            </footer>
          </article>
        );
      })}
    </div>
  );
}
