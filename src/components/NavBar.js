import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';


const Navbar = () => {
    const items = useSelector((state)=>state.cart)
  return (
    <div  style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
    <span style={{textAlign:'center', fontSize:'20px'}} className='logo'>Redux Store</span>
    <div className='right-navbar'>
        <Link className='navLink' to='/'> Home</Link>
        <Link className='navLink' to='/cart'>Cart</Link> 
        <span className='cartCount'>Cart item: {items.length}</span>
    </div>  

    </div>
  )
}

export default Navbar 
