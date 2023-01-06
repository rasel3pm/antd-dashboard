import React from "react";
import { Card } from "antd";

const Error = () => {
  const card = {
    header: <h2>Page not found</h2>,
    element: "Please type currect url",
    elementTwo: "Check your internet cunnection",
    elementThere: "We Know",
  };
  return (
    <div
      style={{
        backgroundColor: "#f5f6fa",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        title={card.header}
        bordered={true}
        style={{
          width: 600,
        }}
      >
        <p>{card.element}</p>
        <p>{card.elementTwo}</p>
        <p>{card.elementThere}</p>
      </Card>
    </div>
  );
};

export default Error;
