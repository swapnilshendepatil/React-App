import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Card, CardBody } from "reactstrap";

const Home = (props) => {
  const [tableData] = useState([
    { id: 1, itemName: "Item 1", quantity: 4 },
    { id: 2, itemName: "Item 2", quantity: 3 },
    { id: 3, itemName: "Item 3", quantity: 2 },
  ]);

  console.log("tableData in Home component:", tableData);

  const handleEditClick = () => {
    console.log(tableData);
  };

  return (
    <div>
      <h2 className="App-header mb-3">Inventory List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardBody>
            <Table striped className="">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.itemName}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Link to={"/lists"} state={tableData}>
              <button className="btn btn-primary">Edit List</button>
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { Home };
