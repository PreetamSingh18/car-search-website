import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  let pages = [];
  if (totalPages > 0) {
    pages.push(-1);
  }
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  if (totalPages > 0) {
    pages.push(-2);
  }
  return (
    <div className="pagination-container">
      {pages.map((page, ind) => {
        return (
        
            page ==-1 ? (
            <Link to={`/page/${currentPage - 1}`}>
              <button
                className="page-btn"
                disabled={currentPage == 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <FontAwesomeIcon icon={faLessThan} />
              </button>
              </Link>
            ) : page == -2 ? (
                <Link to={`/page/${currentPage + 1}`}>
              <button
                className="page-btn"
                disabled={currentPage == totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <FontAwesomeIcon icon={faGreaterThan} />
              </button>
             </Link>)
            : (
                <Link to={`/page/${page}`}>
              <button
                key={ind}
                className={
                  currentPage == page ? "page-btn active-btn" : "page-btn"
                }
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
          </Link>
            )
        );
      })}
    </div>
  );
};

export default Pagination;
