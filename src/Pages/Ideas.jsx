import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Filter from "../Components/Filter";
import Idea from "../Components/Idea";
import Data from "../Data.json";
import Pagination from "../Components/Pagination";

const Ideas = () => {
  const [ideas, setIdeas] = useState(Data.ideas);
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('currentPage') ? parseInt(localStorage.getItem('currentPage')) : 1;
  });
  const [postsPerPage, setPostsPerPage] = useState(() => {
    return localStorage.getItem('postsPerPage') ? parseInt(localStorage.getItem('postsPerPage')) : 10;
  });
  const [sortOrder, setSortOrder] = useState(() => {
    return localStorage.getItem('sortOrder') || 'newest';
  });

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
    localStorage.setItem('postsPerPage', postsPerPage);
    localStorage.setItem('sortOrder', sortOrder);
  }, [currentPage, postsPerPage, sortOrder]);

  //Ngambil current post
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  //Ubah format datanya
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  //Sorting
  const sortedIdeas = [...ideas].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);

    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const currentPosts = sortedIdeas.slice(firstPostIndex, lastPostIndex);

  //Sort by
  const onSortOrderChange = (order) => {
    setSortOrder(order);
  };

  //Show per page
  const handlePostsPerPageChange = (num) => {
    setPostsPerPage(num);
    setCurrentPage(1);
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <Filter
        totalPosts={ideas.length}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        onPostsPerPageChange={handlePostsPerPageChange}
        onSortOrderChange={onSortOrderChange}
        sortOrder={sortOrder}
      />

      <div className="container">
        <div className="row row-cols-md-4 g-4 p-4">
          {currentPosts.map((currentPost) => (
            <Idea key={currentPost.id} idea={currentPost} />
          ))}
        </div>
      </div>

      <Pagination
        totalPosts={ideas.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Ideas;
