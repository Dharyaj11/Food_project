import React from 'react'

export default function Cards(props) {

  let options=props.options;
  let priceOptions=Object.keys(options);

  return (
    <div>
        <div className="card m-3" style={{ width: "18.75rem" }}>
          <img className="card-img-top" src={props.imgSrc} alt="Card  cap" />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            
            <div className="container w-100">
              <select className=" m-3 h-100  bg-success rounded">
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select className="m-2 h-100 bg-success rounded">
                {priceOptions.map((data)=>{
                  return <option key={data} value={data}>{data}</option>
                })}
              </select>

              <div className="d-inline h-100 fs-5">Totalprice</div>
            </div>
          </div>
        </div>
      </div>
  )
}
