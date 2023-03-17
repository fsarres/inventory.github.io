import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About(){
  return (
    <>
      <Container>
        <Row>
          <h1>Welcome to our company!</h1>
          <Col sm={8}>
            <img
              src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="inside tech factory"
              height="550px"
            ></img>
          </Col>
          <Col sm={4}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              a interdum nibh, non pellentesque urna. Sed sagittis sapien at
              ipsum porttitor venenatis. Proin eleifend turpis eget ante commodo
              placerat. Aenean elit ex, tincidunt sed vulputate sed, consequat
              id libero. Aenean dictum ante et dui tincidunt, quis aliquam augue
              aliquam. Proin purus erat, fringilla id tincidunt et, tempor ut
              magna. Aliquam nec ipsum commodo, commodo libero sed, tincidunt
              neque. Nam neque arcu, vestibulum nec eros in, eleifend ornare
              est. Sed pretium commodo lacus sed commodo. Praesent dictum nunc
              sit amet magna vulputate posuere. Nullam lobortis vehicula turpis,
              sit amet viverra felis. Nunc vitae velit dolor. Aenean hendrerit
              tortor in odio tincidunt malesuada. Cras lobortis metus vitae
              ligula condimentum pretium. Suspendisse vitae euismod ante, vel
              pulvinar lectus. In eget lacinia dolor.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default About