import React from "react";
import { Card, Button } from "react-bootstrap";

const MyProfile = ({ student: { id, name, avatar } }) => {
  return (
    <Card className="shadow-sm h-100 text-center">
      <Card.Body>
        <Card.Img
          variant="top"
          src={avatar}
          alt={name}
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            margin: "0 auto 15px",
            borderRadius: "8px",
          }}
        />

        <Card.Title className="text-dark">{name}</Card.Title>
        <Card.Text className="text-dark">ID: {id}</Card.Text>

        <Button variant="primary" className="mt-3">
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MyProfile;
