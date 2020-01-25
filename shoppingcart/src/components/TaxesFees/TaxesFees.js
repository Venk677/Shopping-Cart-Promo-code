import React, { Component } from 'react'
import {Row ,Col} from 'react-bootstrap'

class TaxesFees extends Component {
  render() {
    return (
      <Row className ="show-grid">
          <Col md ={6}> Est .taxes & Fees (Based on GST)</Col>
          <Col md ={6}> {`$${this.props.taxes}`}</Col>
      </Row>
    )
  }
}
export default TaxesFees ;
