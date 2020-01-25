import React, { Component } from "react";
import {
  Button,
  Collapse,
  Form,
  Row,
  Col,
  FormGroup,
  FormControl
} from "react-bootstrap";
import { connect } from 'react-redux';
import { handleChange } from '../../actions/promoCodeActions';

class PromoCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }
  handleChange =(e) => {
      this.props.handleChange(e);
  }

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          bsstyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? "Apply" : "Hide"} Promo Code
          {this.state.open === false ? "+" : "-"}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Row className="show-grid">
              <Col md={12}>
                <Form>
                  <FormGroup controlId="formInlineName">
                    <FormControl
                      type="text"
                      placeholder="Enter Promo Code"
                      value={this.props.promoCode}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Form>
                <Button
                  block
                  bsStyle="Success"
                  className="btn-round"
                  disabled={this.props.isDisabled}
                  onClick={this.props.giveDiscount}
                >
                  Apply
                </Button>
              </Col>
            </Row>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    promoCode:state.promoCode.value
});
export default connect(mapStateToProps,{handleChange})(PromoCode);
