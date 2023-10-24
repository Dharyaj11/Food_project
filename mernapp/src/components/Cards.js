import React from 'react'

export default function Cards() {
  return (
    <div>
        <div className="card mt-3" style={{ width: "18rem" }}>
          <img className="card-img-top" src="https://source.unsplash.com/random/480x480/?barbeque" alt="Card  cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">someImportant mesg</p>
            <div className="container w-100">
              <select className=" m-3 h-100  bg-success rounded">
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select className="m-2 h-100 bg-success rounded">
                <option key="half" value="half">
                  Half
                </option>
                <option key="full" value="full">
                  Full
                </option>
              </select>

              <div className="d-inline h-100 fs-5">Total price</div>
            </div>
          </div>
        </div>
      </div>
  )
}
