import React, { useState, useEffect } from 'react'

const HomePage = () => {
  // const [productList, setProductList] = useState<TProduct[]>([])
  // useEffect(() => {
  //   window
  //     .fetch('/api/avo')
  //     .then((response) => response.json())
  //     .then(({ data, length }) => {
  //       setProductList(data)
  //     })
  //     .catch(error => console.error(error.message))
  // }, [])
  return (
    <div>
      <div>Platzi and Next.js!</div>
      {/* {productList.map((product) => (
        <div>{product.image}</div>
      ))} */}
    </div>
  )
}

export default HomePage
