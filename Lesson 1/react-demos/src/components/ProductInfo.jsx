import React from 'react'

const ProductInfo = () => {
    const computer= "Laptop";
    const price = 1200;
    const stock = "In Stock";
  return (
    <div>
      <p>name: {computer} </p>
      <p>price: {price}</p>
      <p>availability: {stock}</p>
    </div>
  )
}

export default ProductInfo;
