import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const Lists = (props) => {
  return (
    <div className="pt-5">
      <Card>
        <CardHeader>
          Edit <code>src/App.js</code> and save to reload.
        </CardHeader>
        <CardBody>
          <p>Your code goes here</p>
        </CardBody>
      </Card>
    </div>
  );
};

export { Lists };
