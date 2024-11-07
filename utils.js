export const fetchExchangeRate = async (baseCurrency, targetCurrency, setExchangeRate, setError) => {
    const apiKey = '0748b5f17938dacb79e1260e';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.result === "success") {
        const rate = data.conversion_rates[targetCurrency];
        setExchangeRate(rate);
        setError('');
      } else {
        setError('Unable to fetch exchange rate.');
      }
    } catch (err) {
      setError('Failed to fetch exchange rate. Please try again later.');
    }
  };
  