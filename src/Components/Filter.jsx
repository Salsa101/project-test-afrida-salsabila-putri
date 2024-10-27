import React from "react";
import "../Style/Filtering.css";

const Filter = ({
  currentPage,
  postsPerPage,
  totalPosts,
  onPostsPerPageChange,
  onSortOrderChange,
  sortOrder,
}) => {
  //Showing
  const startItem = (currentPage - 1) * postsPerPage + 1;
  const endItem = Math.min(startItem + postsPerPage - 1, totalPosts);
  return (
    <div className="filter-system">
      <div className="showing">
        <p>
          Showing {startItem}-{endItem} of {totalPosts}
        </p>
      </div>
      <div className="filtering">
        <div className="filter-show">
          <p>Show per page:</p>
          <div class="dropdown">
            <button
              className="btn dropdown-toggle justify-content-between"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {postsPerPage}
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => onPostsPerPageChange(10)}
                >
                  10
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => onPostsPerPageChange(20)}
                >
                  20
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => onPostsPerPageChange(50)}
                >
                  50
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sort-by">
          <p>Sort by:</p>
          <div class="dropdown">
            <button
              className="btn dropdown-toggle justify-content-between"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {sortOrder === "newest" ? "Newest" : "Oldest"}
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => onSortOrderChange("newest")}
                >
                  Newest
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => onSortOrderChange("oldest")}
                >
                  Oldest
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
