import React from 'react'
import { Component } from 'react';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import "./Upload.css";


class Upload extends Component{
constructor(props){
    super(props);
    this.state={
        rows:"",
        cols:""
    }
}

    fileHandler = (event) => {
        let fileObj = event.target.files[0];
        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
          if(err){
            console.log(err);            
          }
          else{
            this.setState({
              cols: resp.cols,
              rows: resp.rows
            });
          }
        });               
      }
render(){
    return(
  //       <section>
  //   <div className="form-container1">
  //       <h1 className="upload"> Upload Project List</h1>
  //       <form>
  //           <div className="control">
            
  //           <input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}} />
             
  //              {/* <span><input type="checkbox" /> Remember Me </span> */}
  //              <div className ="control">
  //            <input type="submit" value="Done" />
  //            {/* <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" /> */}
  //             </div>
  //           </div>

  //       </form>
        
 
  //  </div>
  // </section>
  <div>
    <form class="container">
  <div class="form-group">
    <h1 id="upload">Upload File here</h1>
    
    <hr></hr>
    {/* <label for="exampleFormControlFile1" id="upload">Upload File</label> */}
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
  <button type="submit" class="btn btn-primary">Done</button>
</form>
  </div>
 
 
   
    
    
    )
}
}
export default Upload;