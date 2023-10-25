import React,{useEffect, useRef, useState} from 'react'

import { useDispatchCart,useCart } from './ContentReducer';

export default function Cards(props) {
  let dispatch=useDispatchCart();
  let data=useCart();
  const priceRef=useRef();
  let options=props.options;
  let priceOptions=Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setsize] = useState("");

  const handleAddToCart=async ()=>{
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size,img:props.foodItem.img})
    console.log(data)
  }
  let finalPrice=qty*parseInt(options[size]);
  useEffect(()=>{
    setsize(priceRef.current.value)
  },[])
  return (
    <div>
        <div className="card m-3" style={{ width: "18.75rem" }}>
          <img className="card-img-top" src={props.foodItem.img} alt="Card  cap" style={{height:"200px", objectFit:"fill"}}/>
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            
            <div className="container w-100">
              <select className=" m-3 h-100  bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>setsize(e.target.value)}>
                {priceOptions.map((data)=>{
                  return <option key={data} value={data}>{data}</option>
                })}
              </select>

              <div className="d-inline h-100 fs-5">Rs.{finalPrice}/-</div>
            </div>
            <hr/>
            <button className='btn btn-success justify-content ms-2' onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
  )
}
