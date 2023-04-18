import React,{useState} from 'react'
import "./shop.scss"
import {data} from "../data"
function Shop() {
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25];
  // ===================================== Pagination ===============================
  const [currentPage, setCurrentPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(data.length / 10));
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    setCurrentPage(pageNumber);
  }
  const pageRange = 5;
  const minPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  const maxPage = Math.min(totalPages, minPage + pageRange - 1);
  const pageNumbers = [];
for (let i = minPage; i <= maxPage; i++) {
  pageNumbers.push(i);
}
  // ===================================== Pagination End ===============================

  

return (
  <div className='shop'>
    <div className='products'>
      {data.slice((currentPage - 1) * 10, currentPage * 10).map((item) => (
        <div className='product'>{item.id}</div>
      ))}
    </div>
    {/* Pagination buttons */}
    <div className="pagination">
    {pageNumbers.map((pageNumber) => (
      <button key={pageNumber} onClick={() => handlePageChange(pageNumber)} className={pageNumber === activePage ? 'button-active' : ''}>
        {pageNumber}
      </button>
    ))} 




    </div>
     
  </div>
);

}

export default Shop