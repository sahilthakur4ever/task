import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Search() {
    const[phonelist, setPhonelist]=useState();
    const[filter,setFilter]=useState('');
    useEffect(() => {
     const apidata=async()=>{
        const responce=await axios.get("https://dummyjson.com/products")
        setPhonelist(responce.data.products);
     }
     apidata();
    }, [])
    
    const searchText= (e)=>{
        setFilter(e.target.value);
        
    }
    let dataSearch=phonelist?.filter(item=>{
return Object.keys(item).some(key=>
   
    item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
    });
  return (
    <div>
<section className='py-4 container'>
    <div className='row justify-content-center'>
        <div className='col-12 mb-5'>
<div className='mb-3 col-4 mx-auto'>
<h1>Search</h1>
<input type='text' className='form-control' value={filter} onChange={searchText.bind(this)}>
</input>
</div>
        </div>
        {dataSearch?.map((item,index)=>{
            return(
                <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
    <div className='card p-0 overflow-hidden h-100 shodow'>
        <img className='card-img-top' src={item.images[0]}></img>
        <div className='card-body'>
            <h5 className='card-title'>{item.title}</h5>
            <p>price:{item.price}</p>
            <p className='card-text'>{item.description}</p>
        </div>

    </div>
</div>

            )
        })}
    </div>
</section>
    </div>
  )
}

export default Search;