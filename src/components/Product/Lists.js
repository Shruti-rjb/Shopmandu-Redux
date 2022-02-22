import React from 'react';
import axios from 'axios';
import Cards from './Cards';

const Lists = () => {
    const list = async ({setShow})=>{
        const response = await axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product');
        setShow(response?.data || [])
    }
  return (
    <div>{list.map((item) => (
        <Cards key={item.id} item={item}/>
      ))}</div>
  )
}

export default Lists