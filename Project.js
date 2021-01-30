import React, { useState } from "react";
import { FaCentercode } from "react-icons/fa";
import "./Project.css";

function AddInput() {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

// handle input change
const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };
  return (
    <div className="container">
      <h3 style={{ color:"blue",textAlign:"center" }}>PROJECT DETAILS</h3>
    <form>
      <tr >
        <td colspan='2'>
      <input  type="text"
              name="Project Title"
              placeholder="Project Title"
            //   value={x.firstName}
            //   onChange={e => handleInputChange(e, i)}
            /></td>
            </tr>
            <tr>
            <td><input
            type="text"
              name="Internal"
              placeholder="Internal"
            //   value={x.firstName}
            //   onChange={e => handleInputChange(e, i)}
            /></td>
            <td>
            <input
            type="text"
              name="External"
              placeholder="External"
            //   value={x.firstName}
            //   onChange={e => handleInputChange(e, i)}
            />
            </td>
            </tr>
            </form>
           
      {inputList.map((x, i) => {
        return (
            
          <div className="box">
             <tr>
               <td>
            <input
            type="text"
              className="ml10"
              name="Student"
              placeholder="Student"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)
              
              }

              
            /> 
            </td>
            <td>
            <input
            type="text"
              className="ml10"
              name="Email"
              placeholder="Email"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)
              
              }
              
            />
            </td>
            </tr> 
            <tr>
              <td >
            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"  class="btn btn-secondary" id="remove"
                onClick={() => handleRemoveClick(i)}>X</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}  class="btn btn-primary" id="add" >Add</button>}
            </div>
            </td>
            
            </tr>
            
          </div>
          
        );
      })}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
      <button type="submit" className="btn btn-primary" id="insert" >Insert</button>
      
      
    </div>
  );
}

export default AddInput;
