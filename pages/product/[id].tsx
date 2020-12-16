import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>([])
  const { query } = useRouter()

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error(error.message))
    }
  }, [query])
  console.log(product)

  return (
    <section>
      <h1>Página producto:</h1>
      <h3>{product.name}</h3>
    </section>
  )
}

export default ProductPage
