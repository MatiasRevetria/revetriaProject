import React, { useState } from 'react';
import Product from './Product';
import  Pagination  from 'react-bootstrap/Pagination';

const ProductList = ({products,addToCart,removeFromCart, Agregado_en_carrito}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4
  const indexOfLast = currentPage * itemsPerPage
  const indexOfFirst = indexOfLast - itemsPerPage
  const currentProducts = products.slice(indexOfFirst, indexOfLast)
  const totalPages = Math.ceil(products.length / itemsPerPage)

  return (
    <>
    <div className='container mt-4'>
      <div className='row g-2'>
        {currentProducts.map((product)=> (
          <div className='col-sm-6 col-md-4 col-lg-3' key={product.id}>
            <Product product={product} addToCart={addToCart} removeFromCart={removeFromCart} Agregado_en_carrito={Agregado_en_carrito}/>
          </div>
        ))}
      </div>
    </div>
    
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    }}>
      <Pagination className='gap-2 mt-4'>
        <Pagination.Prev onClick={()=>setCurrentPage(page => Math.max(page-1,1))} disabled={currentPage===1} />
          {
            Array.from({length:totalPages},(_,i)=>(<Pagination.Item key={i+1} active={i+1 === currentPage} onClick={()=>setCurrentPage(i+1)}>
              {i+1}
            </Pagination.Item>
            ))
          }
        <Pagination.Next onClick={()=>setCurrentPage((page)=>Math.min(page+1,totalPages))} disabled={currentPage===totalPages} />
      </Pagination>
    </div>
      </>
  )
}

export default ProductList
