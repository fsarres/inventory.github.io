import React from 'react'
import Card from 'react-bootstrap/Card';

function Header() {
    return (
        <>
      <div className="header justify-content-center">
        <Card>
          <Card.Header>
          <h6>TechINC</h6>
          <img
            text="Tech company"
            alt="Company logo"
            src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            height="40px"
          />
          </Card.Header>
        </Card>
        </div>
        </>
  )}
  
  export default Header
  