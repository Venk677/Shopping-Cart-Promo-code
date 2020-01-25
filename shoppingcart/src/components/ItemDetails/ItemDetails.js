import React, { Component } from "react";
import { Button, Collapse, Media, Row, Col } from "react-bootstrap";

class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <Media.Body>
                <img
                  width={100}
                  height={100}
                  alt="thumbnail"
                  src="https://images-na.ssl-images-amazon.com/images/I/51RQ5km2gkL._SX258_BO1,204,203,200_.jpg"
                />
                <p>A book which will give you a supreme clarity about life.</p>
                <Row className=" show-grid">
                  <Col md={6}>
                    <strong className="price-strike">{`$${this.props.price}`}</strong>
                  </Col>
                  <Col md={6}> Quantity : 1</Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}
export default ItemDetails;
