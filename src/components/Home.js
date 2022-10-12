import React from "react";
import { Table, Button } from "reactstrap";

const Home = (props) => {
  return (
    <div>
      <h2 className="App-header">Inventory List</h2>
      <div className="d-flex justify-content-center">
        <Table striped className="w-50">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Button>Edit List</Button>
    </div>
  );
};
export { Home };
