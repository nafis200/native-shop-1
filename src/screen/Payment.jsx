

import { StyleSheet, Text, View,Button } from "react-native";
import React, { useEffect } from "react";
import { useStripe } from '@stripe/stripe-react-native';

const Payment = () => {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();

    const setup = async () => {
      const { error } = await initPaymentSheet({
        merchantDisplayName: 'Example, Inc.',
        paymentIntentClientSecret: paymentIntent,
      });
      if (error) {
        
      }
    };
   
    useEffect(() => {
      setup();
    }, []);
  
    const checkout = async () => {
      const { error } = await presentPaymentSheet();
  
      if (error) {
        
      } else {
    
      }
    };
  return (
    <View>
      <Button title="Checkout" onPress={checkout} />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({});
