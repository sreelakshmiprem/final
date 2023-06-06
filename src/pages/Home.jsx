import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function Home() {
  const [blog, setBlog] = useState([]);

  const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await data.json();
    setBlog(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div bg='dark' >
      <Container >
        <Row>
          {blog.map((item, index) => {
            return (
              <Col key={index}>
                <Card
                  className="mt-3"
                  style={{
                    width: "20rem",
                    maxHeight: "100rem",
                    height: "30rem",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://img.freepik.com/free-photo/toy-bricks-table-with-word-blog_144627-47465.jpg?w=1480&t=st=1686044338~exp=1686044938~hmac=afe20c1111264fe4e4bda5e3a525dc49886aeb3019bb3f39e98fc6a97b065c6c"
              
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text  style={{
                    width: "20rem",
                    height: "10rem",
                  }}>{item.body}</Card.Text>
                    <Button variant="dark">CLICK</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
