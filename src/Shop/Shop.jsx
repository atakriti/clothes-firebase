import React,{useEffect, useState} from 'react'
import "./shop.scss"
import {data} from "../data"
import { Link } from 'react-router-dom';
import { GrFormClose } from "react-icons/gr"
import {BsFillFilterCircleFill} from "react-icons/bs"
function Shop() {
  // =====================================Filtering ============================
  let [showFilter, setShowFilter] = useState(false)
  let [filterGender, setFilterGender] = useState("")
  let [filterType, setFilterType] = useState("")
  let [price, setPrice] = useState(500)
  // let filterd = (item) => (
  //   item.price <= price &&
  //   item.gender.includes(filterGender.toLowerCase()) &&
  //   item.type.includes(filterType.toLowerCase()) &&
  //   item.name.toLowerCase()
  // )
  let filterdData = data.filter(item => item.price <= price &&
    item.gender.includes(filterGender.toLowerCase()) &&
    item.type.includes(filterType.toLowerCase()) &&
    item.name.toLowerCase())
  // ===================================== End Filtering ============================
  // ===================================== Pagination ===============================
  const [currentPage, setCurrentPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(filterdData.length / 10));
  console.log("🚀 ~ file: Shop.jsx:28 ~ Shop ~ totalPages:", totalPages)
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
  useEffect(() => {
    // to refresh the totalPages once the data is filtered
    setTotalPages(Math.ceil(filterdData.length / 10))
  },[filterdData])
  // ===================================== Pagination End ===============================

return (
  <div className='shop'>
    <div className='products'>
      {filterdData.slice((currentPage - 1) * 10, currentPage * 10).map((item) => (
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
    {/* ================================= FilterButton ================================= */}
    <div className="filterBtn">
      <button onClick={() => setShowFilter(true)}><span>Filter</span> <BsFillFilterCircleFill/></button>
    </div>
    {/* ====================================================== Filtering ========================================== */}
    {showFilter && (
 <div className="filter-main">
 <div className='filtering'>
               {/* ========== Top ============ */}
               <div   className="top">
                   <h1>Filter</h1>
                   <GrFormClose onClick={()=>setShowFilter(false)}/>
               </div>
               {/* ============== Gender ============= */}
               <form className='gender'>
                   <h2>Gender</h2>
                  <span>
                      <label htmlFor="all">All</label>
                       <input onChange={(e)=>setFilterGender(e.target.value)} type="radio" defaultChecked name="gender" value="all" id='all' />
                  </span>
                  <span>
                       <label htmlFor="man">Men</label>
                       <input onChange={(e)=>setFilterGender(e.target.value)}  type="radio" name="gender" value="man" id='man' />
                  </span>
                   <span>
                       <label htmlFor="women">Women</label>
                       <input onChange={(e)=>setFilterGender(e.target.value)}  type="radio" name="gender" value="women" id='women' />
                   </span>
                   <span>
                   <label htmlFor="kids">Kids</label>
               <input onChange={(e)=>setFilterGender(e.target.value)}  type="radio" name="gender" value="kids" id='kids' />
                   </span>
               </form>
               {/* ====================== Prices ================ */}
               <form className='price'>
                   <label htmlFor="price">Price</label>
                   <input onChange={(e)=>setPrice(e.target.value)} value={price} type="range" name="price" id="price"  min="0" max={500} />
                   <span>Up to { price}€</span>
               </form>
               {/* ===================== Type ==================== */}
               <form className='type'>
                   <h2>Type</h2>
                   <span>
                       <label htmlFor="all">All</label>
                       <input onChange={(e)=>setFilterType(e.target.value)} defaultChecked type="radio" name="type" id="all" value="all" />
                  </span>
                  <span>
                       <label htmlFor="shoes">Shoes</label>
                       <input onChange={(e)=>setFilterType(e.target.value)} type="radio" name="type" id="shoes" value="shoes" />
                  </span>
                  <span>
                       <label htmlFor="clothes">Clothes</label>
                       <input onChange={(e)=>setFilterType(e.target.value)}  type="radio" name="type" id="clothes" value="clothes" />
                  </span>
                   <span>
                       <label htmlFor="accessories">Accessories</label>
                       <input onChange={(e)=>setFilterType(e.target.value)}  type="radio" name="type" id="accessories" value="accessories" />
                   </span>
                  <span>
                       <label htmlFor="perfume">Perfumes</label>
                       <input onChange={(e)=>setFilterType(e.target.value)}  type="radio" name="type" id="perfume" value="perfume" />
                  </span>
                   <span>
                       <label htmlFor="makeup">Makeup</label>
                       <input onChange={(e)=>setFilterType(e.target.value)}  type="radio" name="type" id="makeup" value="makeup" />
                   </span>
                   <span>
                       <label htmlFor="bag">Bags</label>
                       <input onChange={(e)=>setFilterType(e.target.value)}  type="radio" name="type" id="bag" value="bag" />
                   </span>
               </form>
          </div>
</div>
    )}
   
     
  </div>
);

}

export default Shop