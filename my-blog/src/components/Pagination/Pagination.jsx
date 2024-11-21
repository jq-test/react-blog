import { memo } from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = memo(function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  nextPage,  
  prevPage,  
  hasNext,  
  hasPrev,
}) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button
        // onClick={() => onPageChange(currentPage - 1)}
        // disabled={currentPage === 1}
        className="pagination-button"
        onClick={prevPage}
        disabled={!hasPrev}
      >
        Previous
      </button>

      <div className="page-numbers">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`page-number ${number === currentPage ? "active" : ""}`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        ))}
      </div>

      <button
      // onClick={() => onPageChange(currentPage + 1)}
      // disabled={currentPage === totalPages}
        className="pagination-button"
        onClick={nextPage}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
});

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  hasNext: PropTypes.bool.isRequired,
  hasPrev: PropTypes.bool.isRequired,
};

export default Pagination;