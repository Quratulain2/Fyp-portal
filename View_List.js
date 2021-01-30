import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import "./View_List.css";

export class View_List extends Component {
    render() {
        return (
            <div id="table-div">
                <Table striped bordered hover size="sm">
  <thead id="view_thead">
    <tr>
      <th>#</th>
      <th>Project</th>
      <th>Student</th>
      <th>Internal</th>
      <th>External</th>
      <th>Email Id</th>
      <th>Action</th>
      <th>Action</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Daraz.pk</td>
      <td>Saira</td>
      <td>Sir Ali</td>
      <td>Sir Fahad</td>
      <td>saira@gmail.com</td>
      <td><button class="btn btn-primary">Edit</button></td>
      <td><button class="btn btn-primary">Delete</button></td>
    </tr>
    <tr>
    <td>2</td>
      <td>HumMart.pk</td>
      <td>Zoha</td>
      <td>Sir Ahmed</td>
      <td>Sir Samad</td>
      <td>zoha@gmail.com</td>
      <td><button class="btn btn-primary">Edit</button></td>
      <td><button class="btn btn-primary">Delete</button></td>
    </tr>
    <tr>
    <td>3</td>
      <td>Careem.pk</td>
      <td>Quratul Ain</td>
      <td>Sir Saad</td>
      <td>Sir Nuwair</td>
      <td>ain@gmail.com</td>
      <td><button class="btn btn-primary">Edit</button></td>
      <td><button class="btn btn-primary">Delete</button></td>
    </tr>
  </tbody>
</Table>
                
            </div>
        )
    }
}

export default View_List;
