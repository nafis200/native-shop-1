import {StyleSheet, Text, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Cartcard from './Cartcard';
import {CartContext} from '../context/CartContext';
import {AuthContext} from '../components/provider/Authprovider';
import useAxiospublic from '../components/hooks/useAxiospublic';
import {useQuery} from '@tanstack/react-query';
import Payment from './Payment';

import {CardForm, StripeProvider, useConfirmPayment} from '@stripe/stripe-react-native';
import axios from 'axios';

const Cartscreen = () => {
  const {carts, totalPrice, deleteItemFromCart} = useContext(CartContext);
  const {confirmPayment, loading} = useConfirmPayment()
  const {user} = useContext(AuthContext);

  const [isReady,setIsReady] = useState(false)


  const axiosSecure = useAxiospublic();
  
  console.log(user?.email);
  
  // const {data: userx = []} = useQuery({
  //   queryKey: ['menu'],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/users`);
  //     return res.data;
  //   },
  // });

  // console.log('tanstack query', userx);

  // axiosSecure
  //   .get(`/totalvotes`)
  //   .then(res => {
  //     console.log(res.data);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //   });
    
  const fetchPaymentIntent = async () => {
    console.log("Fetching Payment Intent...");
    try {
      const response = await axios.post('http://192.168.0.112:5000/create-payment-intent', {
        price: 1000,
        email: user?.email
      });
      return response.data.clientSecret;
    } catch (error) {
      console.error("Error:", error);
    }
  }
    
  const handlePayment = async () => {
    const clientSecret = await fetchPaymentIntent();
    if (!clientSecret) {
      Alert.alert("Error", "Payment Intent could not be created. Please try again.");
      return;
    }
    const {error, paymentIntent} = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card'
    });
    if (error) {
      Alert.alert('Error occurred with your payment', error.localizedMessage);
    } else if (paymentIntent) {
      Alert.alert("Success", "The payment was confirmed successfully!");
    }
  }
  

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.conatiner}>
      <Header isCart={true} />
      {/* <Cartcard/>
     <Cartcard/> */}
      <FlatList
        data={carts}
        renderItem={({item}) => (
          <Cartcard
            item={item}
            deleteItemFromCart={deleteItemFromCart}></Cartcard>
        )}
        ListFooterComponent={
          <>
            <View style={styles.priceContainer}>
              <View style={styles.priceAndTitle}>
                <Text style={[{color: 'black'}, styles.text]}>Total: </Text>
                <Text style={[{color: 'black'}, styles.text]}>
                  ${totalPrice}{' '}
                </Text>
              </View>

              <View style={styles.priceAndTitle}>
                <Text style={[{color: 'black'}, styles.text]}>Shipping: </Text>
                <Text style={[{color: 'black'}, styles.text]}>$0.0: </Text>
              </View>
            </View>

            <View style={styles.divider} />
            <View style={styles.priceAndTitle}>
              <Text style={[{color: 'black'}, styles.text]}>Grand Total: </Text>
              <Text style={[{color: 'black', fontWeight: '700'}, styles.text]}>
                ${totalPrice}
              </Text>
            </View>

            <TouchableOpacity style={styles.checkoutContainer}>
              <Text style={[{color: 'black'}, styles.buttonText]}>
                Checkout
              </Text>
            </TouchableOpacity>

            <StripeProvider
              publishableKey={
                'pk_test_51PKhGYP7uimOQ3axj9wJSbPL0sk8Ij53RtgktCk2cXZnSlv7qWPvKDBoRSg84tLdjw2sC2Js6fTwXmnuSDcIHSAN00htP4E61E'
              }>
              <CardForm
                style={styles.cardform}
                cardStyle={{
                  backgroundColor: '#708090', 
                  textColor: 'white', 
                  borderColor: '#cccccc', 
                  borderRadius: 5,
                }}
                placeholderTextColor='white' 
                postalCodeEnabled={true}
                onFormComplete={()=>{
                   setIsReady(true)
                }}
              />
            </StripeProvider>

            <TouchableOpacity onPress={async()=>{
              await handlePayment()
            }} style={[styles.checkoutContainer,(!isReady || loading) && {opacity:0.5}]} disabled = {!isReady || loading}>
              <Text style={[{color: 'black'}, styles.buttonText]}>
                Pay
              </Text>
            </TouchableOpacity>
            

          </>
        }
      />
    </LinearGradient>
  );
};

export default Cartscreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 15,
  },
  priceAndTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 18,
  },
  divider: {
    borderWidth: 2,
    borderColor: '#C0C0C0',
    marginTop: 5,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },
  checkoutContainer: {
    backgroundColor: 'red',
    width: '100%',
    marginVertical: 40,
    borderRadius: 20,
  },
  cardform: {
    height: 300,
    color: 'black',
    marginVertical:10
  },
});
