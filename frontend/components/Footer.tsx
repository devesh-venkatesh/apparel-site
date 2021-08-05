import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <Card border="primary" style={{ width: "100%" }}>
      <Container>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Container>
    </Card>
  );
}

export default Footer;
