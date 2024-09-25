import React, { useState } from 'react';
import { View, Button, TextInput, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'; // Import WebView
import { initiatePayment } from './sslcommerceService';

const PaymentScreen = () => {
    const [amount, setAmount] = useState('100');
    const [paymentUrl, setPaymentUrl] = useState(null);

    const handlePayment = async () => {
        try {
            const paymentData = { amount };
            const response = await initiatePayment(paymentData);

            if (response.status === 'SUCCESS') {
                setPaymentUrl(response.GatewayPageURL); // Set the payment URL
            } else {
                console.error('Payment initiation failed:', response);
            }
        } catch (error) {
            console.error('Payment error:', error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {paymentUrl ? (
                <WebView source={{ uri: paymentUrl }} /> // Load the payment page in WebView
            ) : (
                <View style={styles.container}>
                    <Text>Enter Amount:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                    />
                    <Button title="Pay Now" onPress={handlePayment} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10,
    },
});

export default PaymentScreen;
