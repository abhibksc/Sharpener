import React, { useEffect, useState } from "react";
import Print from "./Print";







const Form = () => {
  
  const [TitleValue, setTitleValue] = useState("");
  const [UrlValue, setUrlValue] = useState("");
  const [arr, setArr] = useState([]);

  const handleTitle = (e) => {
    setTitleValue(e.target.value);
  };

  const handleUrl = (e) => {
    setUrlValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const obj = {
        // id:UrlValue,
        key : UrlValue,
        value : TitleValue
    };

    setArr([...arr ,obj]);
    setTitleValue('')
    setUrlValue('')


  };

  console.log(arr);


  const deleteProduct =  (data) => {
    console.log(data);
     const newEntry =  arr.filter((items) =>  items.key !== data.key)
    setArr(newEntry)
  };

  const EditProduct = (data)=>{
    setTitleValue(data.value);
    setUrlValue(data.key);
    const newEntry =  arr.filter((items) =>  items.key !== data.key)
    setArr(newEntry)

  }






















  return (
    <div className="bg-gray-500 w-full h-36 flex flex-col m-auto gap-10">
      <h1 className="text-center text-2xl">Bookmark Website</h1> 
      <form
        id="myForm"
        className="flex justify-around w-8/12 m-auto bg-gray-500"
        onSubmit={handleFormSubmit}
      >
        <div>
          <label>Website Title:</label>
          <input
            className="bg-black text-yellow-300 p-1 rounded-sm m-2"
            type="text"
            value={TitleValue}
            onChange={handleTitle}
          />
        </div>
        <div>
          <label>Website URL:</label>
          <input
            className="bg-black text-yellow-300 p-1 rounded-sm m-2"
            type="text"
            value={UrlValue}
            onChange={handleUrl}
          />
        </div>
        <button className="bg-red-400 w-16 rounded-md hover:bg-red-500">
          ADD
        </button>
      </form>

      {arr.map((item) => (
        
        <div className="row" key={item.key}>
          <div className="col">ID: {item.key}</div>
          <div className="col">Product Name: {item.value}</div>
          <div className="col">
            <button type="button" className="btn btn-danger" onClick={()=> { deleteProduct(item) }}  >
              Delete
            </button><br/>
            <button type="button" className="btn btn-danger" onClick={()=> { EditProduct(item) }}  >
              Edit
            </button>
          </div>
        </div>
      ))}    
       
      </div>
  );
};

export default Form;