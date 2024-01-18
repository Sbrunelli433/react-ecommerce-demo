import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  PaymentButton,
  PaymentFormContainer,
  FormContainer,
} from "./payment-form.styles";
const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventdefault();

    if(!stripe || !elements){
        return;
    }
    



  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton buttonType={BUTTON_TYPE_CLASSES.inverted}>
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
