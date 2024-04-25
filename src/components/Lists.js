import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import { useLocation } from "react-router-dom";

const Lists = (props) => {
  const location = useLocation();
  const tableData = location.state || {};
  console.log(tableData);
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(tableData);
  const addItem = () => {
    setItems([...items, { itemName: inputValue }]);
    setInputValue("");
  };
  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };
  const clearItems = () => {
    setItems([]);
  };

  return (
    <div>
      <h2 className="App-header">Edit List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardHeader className="cardheader">
            <h6 className="list-header">Item Name</h6>
            <div className="list-div">
              <input
                className="input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button className="btn btn-primary" onClick={addItem}>
                Add
              </Button>
            </div>
            <span>To get started,add 1 or more items</span>
          </CardHeader>
          <CardBody>
            {items.map((data, index) => (
              <>
                <div key={index} className="tabledata">
                  <h6>{data.itemName}</h6>
                  <span onClick={() => removeItem(index)}>x</span>
                </div>
                <hr />
              </>
            ))}
            {items.length !== 0 && (
              <Button outline className="clrBtn" onClick={clearItems}>
                Clear All
              </Button>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { Lists };
