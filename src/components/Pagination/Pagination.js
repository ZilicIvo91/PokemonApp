import React from 'react';
import './Pagination.scss'

export default function Pagination({ goToPrevPage, goToNextPage }) {
  return (
    <div className="pagination-container">
      {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </div>
  )
}