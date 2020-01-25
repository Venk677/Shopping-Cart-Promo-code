import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import React, { Component } from "react";
import SubTotal from "./components/subtotal/Subtotal";
import PickUpSavings from "./components/PickUpSavings/PickUpSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PromoCode from "./components/PromoCode/PromoCode";
import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickUpSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disabledPromoButton: false
    };
  }

  componentDidMount = () => {
    this.setState(
      {
        taxes: (this.state.total + this.state.PickUpSavings) * 0.17
      },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.PickUpSavings + this.state.taxes
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        {
          estimatedTotal: this.state.estimatedTotal * 0.5
        },
        function() {
          this.setState({
            disabledPromoButton: true
          });
        }
      );
    }
    
  };
  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickUpSavings price={this.state.PickUpSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(0)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCode
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disabledPromoButton}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});
export default connect(mapStateToProps, { handleChange })(App);
