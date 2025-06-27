import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';
import AllPostCard from '../components/AllPostCard';

const BrowseListing = () => {
  const posts = useLoaderData();

  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'
  const [filterRoomType, setFilterRoomType] = useState('all'); // 'Single', 'Shared', or 'all'
  const [searchTerm, setSearchTerm] = useState('');

  // Helper: Get timestamp from createdAt or _id fallback
  const getTimestamp = (post) => {
    if (post.createdAt) return new Date(post.createdAt).getTime();
    if (post._id) return parseInt(post._id.toString().substring(0, 8), 16) * 1000;
    return 0;
  };

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts;

    // Filter by room type
    if (filterRoomType !== 'all') {
      filtered = filtered.filter(
        (post) => post.roomType?.toLowerCase() === filterRoomType.toLowerCase()
      );
    }

    // Search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.location.toLowerCase().includes(term)
      );
    }

    // Sort by date or fallback
    return [...filtered].sort((a, b) => {
      const timeA = getTimestamp(a);
      const timeB = getTimestamp(b);
      return sortOrder === 'asc' ? timeA - timeB : timeB - timeA;
    });
  }, [posts, sortOrder, filterRoomType, searchTerm]);

  return (
    <div className="container mx-auto px-4 py-10">
      <Helmet>
        <title>Browse All Post | Find HomeMates</title>
      </Helmet>

      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">All Post</h2>
        <p className="text-sm md:text-base">
          Explore verified roommate listings with comfort, safety, and convenience at the heart of every match.
        </p>
      </div>

      {/* Filter + Sort + Search */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-end items-center  mb-8">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by title or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered flex-1 w-full max-w-sm"
        />

        {/* Sort */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-bordered w-full sm:w-auto"
        >
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>

        {/* Filter */}
        <select
          value={filterRoomType}
          onChange={(e) => setFilterRoomType(e.target.value)}
          className="select select-bordered w-full sm:w-auto"
        >
          <option value="all">All Types</option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
        </select>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredAndSortedPosts.length > 0 ? (
          filteredAndSortedPosts.map((post, index) => (
            <div key={post._id} data-aos="fade-up" data-aos-delay={index * 200}>
              <AllPostCard post={post} />
            </div>
          ))
        ) : (
          <p className="text-center col-span-full font-medium mt-8 text-lg text-error">
            No posts found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default BrowseListing;
