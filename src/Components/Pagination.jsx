import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  //Pagination
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pages = [];

  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(startPage + 3, totalPages);

  if (endPage - startPage < 3) {
    startPage = Math.max(1, endPage - 3);
  }

  endPage = Math.min(startPage + 3, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  //Buat laquo
  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  //Buat raquo
  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  //Buat prev
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //Buat next
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination d-flex justify-content-center align-items-center pt-5 pb-5">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            style={{ color: "black", backgroundColor: "white", border: "none" }}
            onClick={handleFirstPage}
            aria-label="First"
          >
            &laquo;
          </button>
        </li>

        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            style={{ color: "black", backgroundColor: "white", border: "none" }}
            onClick={handlePrevious}
            aria-label="Previous"
          >
            &lsaquo;
          </button>
        </li>

        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
          >
            <button
              className="page-link"
              style={{
                backgroundColor: currentPage === page ? "#ea672e" : "",
                border: "none",
                borderRadius: "5px",
                color: currentPage === page ? "white" : "black",
              }}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={handleNext}
            aria-label="Next"
            style={{ color: "black", backgroundColor: "white", border: "none" }}
          >
            &rsaquo;
          </button>
        </li>

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            style={{ color: "black", backgroundColor: "white", border: "none" }}
            onClick={handleLastPage}
            aria-label="Last"
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
