import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import { STATUSES } from '../store/productSlice'

const Products = () => {
    // const [products, setProucts] = useState([])
    const dispatch = useDispatch();
    const {data: products, status} = useSelector((state)=>state.product)

    useEffect(()=>{
        dispatch(fetchProducts())

        // const fetchProducts = async ()=>{
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     setProucts(data)
        // }
        // fetchProducts()
    }, [])

    const handleAdd = (product)=>{
        dispatch(add(product))
    };

    if(status===STATUSES.LOADING){
        return <h2>Loading.......</h2>
    }

    

    if(status===STATUSES.ERROR){
        return <h1>Something Error</h1>
    }


  return (
    <div className='productsWrapper'>
    {
        products.map(product=>(
            <div className='card' key={product.id}>
                <img src={product.image} alt='image'></img>
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button onClick={()=>handleAdd(product)} className='btn'>Add to cart</button>

            </div>
        ))
    }
      
    </div>
  )
}

export default Products
