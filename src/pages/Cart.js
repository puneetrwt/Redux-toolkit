import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
    const products = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    const removeProduct = (productId)=>{
            dispatch(remove(productId))
    }

    return (
        <div>
            <h1 style={{color:'	#1e90ff', fontWeight:'800' }}>Cart</h1>
            <div className='cartWrapper'>
                {
                    products.map((product) => {
                        return <div key={product.id} className='cartCard'>
                            <img src={product.image} alt='' />
                            <h5>{product.title}</h5>
                            <h5>{product.price}</h5>
                            <button onClick={()=>removeProduct(product.id)}  className='btn'>Remove</button>
                        </div>
                        
                    })

                }
            </div>
        </div>
    )
}

export default Cart
