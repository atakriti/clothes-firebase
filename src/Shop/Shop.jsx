import React,{useState} from 'react'
import "./shop.scss"
import {data} from "../data"
import { Link } from 'react-router-dom';
function Shop() {
  // ===================================== Pagination ===============================
  const [currentPage, setCurrentPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(data.length / 10));
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
        <div className='product'>
          <a className='pro-img'><img src={item.img} alt="" /></a>
          <h2>{item.name}</h2>
          <h3>{item.price}€</h3>
          <h3>{item.gender.split(" ")[0].toString()[0].toUpperCase() + item.gender.split(" ")[0].toString().slice(1)}</h3>
          <h3>{item.type.split(" ")[1].toString()[0].toUpperCase() + item.type.split(" ")[1].toString().slice(1)}</h3>
          <Link className='pro-btn' to={`/single/${item.id}`}>Show now</Link>
        </div>
      ))}
    </div>
    {/* Pagination buttons */}
    <div className="pagination">
    {pageNumbers.map((pageNumber) => (
      <button key={pageNumber} onClick={() => handlePageChange(pageNumber)} className={pageNumber === activePage ? 'button-active' : ''}>
        {pageNumber}
      </button>
    ))} 
      <h4>{ `Page ${currentPage} of ${totalPages}`}</h4>




    </div>
     
  </div>
);

}

export default Shop