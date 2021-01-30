import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import "./Info.css";

export class Info extends Component {
    render() {
        return (
            
            
            <div id="table-div1">
                <h3 className="info_heading">Timeline and Deliverables</h3>
            <Table striped bordered hover size="sm">
<thead id="inf_thead">
<tr>
  
  <th>Activity</th>
  <th>Tentative Dates</th>
  <th>Responsibility</th>
  <th>Deliverables</th>
  

</tr>
</thead>
<tbody>
    
<tr>
  
  <td>Submission of Detailed FYP Proposal as per the provided template</td>
  <td>02nd November 2020</td>
  <td>FYP Student Group	</td>
  <td>Detailed FYP Proposal</td>
  
</tr>
<tr>

  <td>Approval of all FYP and assignment of Internal advisor</td>
  <td>16th November 2020 </td>
  <td>FYP Committee</td>
  <td>N/A</td>
  
</tr>
<tr>

  <td>1st Progress Meeting</td>
  <td>15 December 2020</td>
  <td>FYP Student Group</td>
  <td>Weekly Progress Tracker Signed by the supervisor, Presentation & Progress Report</td>
  
</tr>
</tbody>
</Table>
<br></br>
<h3 className="info_heading">Downloadable Forms/Templates</h3>
<Table>
    
        <tr>
            <td>FYP Proposal</td>
            <td>Download</td>
        </tr>
        <tr>
            <td>FYP Progress Report</td>
            <td>Download</td>
        </tr>
        <tr>
            <td>FYP Progress Tracker</td>
            <td>Download</td>
        </tr>
    
    
    
</Table>
            
        </div>
        
        )
    }
}

export default Info ;
