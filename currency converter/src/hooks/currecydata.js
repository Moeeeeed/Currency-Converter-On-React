import { useState, useEffect } from 'react';

export async function fetchdata(currency) {
  const response = await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
  );
  const res = await response.json();
  return res[currency]; 
}

export function useCurrencyData(currency) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchdata(currency).then(setData);
  }, [currency]);

  return data;
}