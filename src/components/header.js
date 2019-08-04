import React, { Component } from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class Header extends Component {
  constructor(props) {
    super(props);

    this.Showcal = this.Showcal.bind(this);

    this.state = {
      clicked: false
    };
  }

  handleSelect(range) {
    console.log(range);
    // An object with two keys,
    // 'startDate' and 'endDate' which are Momentjs objects.
  }
  Showcal() {
    this.setState({
      clicked: !this.state.clicked
    });
  }
  render() {
    return (
      <div>
        <Container className="top">
          <Row>
            <Col sm={8}>
              <h2>Partners</h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;
