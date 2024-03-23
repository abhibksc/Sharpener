// import React, { useState } from "react";

const Print = (props) => {
    const {data} = props
//   const [items, setItems] = useState(data);

  return (
    <div>
      {data.map((item) => (
        <div className="row" key={item.key}>
          <div className="col">ID: {item.key}</div>
          <div className="col">Product Name: {item.value}</div>
          <div className="col">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Print;
