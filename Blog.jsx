import React from 'react';

const Blog = () => (
  <section id="blog" className="py-20 px-6 md:px-8 bg-gray-950 text-center">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-4xl font-bold mb-4">Blog & YouTube</h2>
      <p className="text-gray-400 mb-8">
        Check out my latest updates and video content below.
      </p>
      <div className="mb-8">
        {/* Example YouTube embed */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-gray-400">
        More blog content coming soon!
      </p>
    </div>
  </section>
);

export default Blog;