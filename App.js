import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { fetchExchangeRate } from './utils'; 
import { lightStyles, darkStyles } from './styles'; 

const CurrencyConverterApp = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [amount, setAmount] = useState('1');
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('MUR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (!showWelcome) {
      //fetchExchangeRate(baseCurrency, targetCurrency, setExchangeRate, setError);
    }
  }, [baseCurrency, targetCurrency, showWelcome]);

  const handleAmountChange = (value) => {
    if (value === '') {
      setAmount('');
      setError('');
    } else if (isNaN(value) || Number(value) <= 0) {
      setError('Please enter a valid positive number.');
    } else {
      setError('');
      setAmount(value);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const styles = isDarkMode ? darkStyles : lightStyles;

  if (showWelcome) {
    return (
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome to Currency Converter</Text>
        <TouchableOpacity style={styles.startButton} onPress={() => setShowWelcome(false)}>
          <Text style={styles.startButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'android' ? 0 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.header}>Currency Converter</Text>

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Text>
            <Switch value={isDarkMode} onValueChange={toggleTheme} />
          </View>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={amount}
          onChangeText={handleAmountChange}
            placeholder="Enter amount"
            placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <View style={styles.pickerContainer}>
            <Picker selectedValue={baseCurrency} style={styles.picker} onValueChange={(itemValue) => setBaseCurrency(itemValue)}>
            <Picker.Item label="USD" value="USD" />
              <Picker.Item label="EUR" value="EUR" />
              <Picker.Item label="GBP" value="GBP" />
              <Picker.Item label="AUD" value="AUD" />
              <Picker.Item label="CAD" value="CAD" />
              <Picker.Item label="JPY" value="JPY" />
              <Picker.Item label="INR" value="INR" />
              <Picker.Item label="MUR" value="MUR" />
              <Picker.Item label="CHF" value="CHF" />
              <Picker.Item label="CNY" value="CNY" />
              <Picker.Item label="BRL" value="BRL" />
              <Picker.Item label="SGD" value="SGD" />
              <Picker.Item label="MXN" value="MXN" />
              <Picker.Item label="LKR" value="LKR" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.converterButton} onPress={(fetchExchangeRate) => (false)}>
          <Text style={styles.converterButtonText}>Convert</Text>
        </TouchableOpacity>

          <View style={styles.arrowContainer}>
            <Text style={styles.arrow}>↓</Text>
          </View>

          <View style={styles.pickerContainer}>
            <Picker selectedValue={targetCurrency} style={styles.picker} onValueChange={(itemValue) => setTargetCurrency(itemValue)}>
            <Picker.Item label="USD" value="USD" />
              <Picker.Item label="EUR" value="EUR" />
              <Picker.Item label="GBP" value="GBP" />
              <Picker.Item label="AUD" value="AUD" />
              <Picker.Item label="CAD" value="CAD" />
              <Picker.Item label="JPY" value="JPY" />
              <Picker.Item label="INR" value="INR" />
              <Picker.Item label="MUR" value="MUR" />
              <Picker.Item label="CHF" value="CHF" />
              <Picker.Item label="CNY" value="CNY" />
              <Picker.Item label="BRL" value="BRL" />
              <Picker.Item label="SGD" value="SGD" />
              <Picker.Item label="MXN" value="MXN" />
              <Picker.Item label="LKR" value="LKR" />
            </Picker>
          </View>

          <Text style={styles.result}>
            {amount} {baseCurrency} = {exchangeRate ? (amount * exchangeRate).toFixed(2) : '...'} {targetCurrency}
          </Text>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};


export default CurrencyConverterApp;
