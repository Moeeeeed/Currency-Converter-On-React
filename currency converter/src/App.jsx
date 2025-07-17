import React, { useEffect,useState } from 'react';
import Inputform from '../src/assets/components/Inputform';
import { useCurrencyData } from './hooks/currecydata';

function App() {
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [From,setFrom]=useState('pkr');
  const [To,setTo]=useState('usd');
  const [options,setOptions]=useState([]);
  const [isLoading, setIsLoading] = useState(false);

 
  
const ratesData = useCurrencyData(From);

const swap = (e) => {
  e.preventDefault();
  const tempFrom = From;
  const tempAmount = amount;
  
  setFrom(To);
  setTo(tempFrom);
  
  setAmount(convertedAmount);
  setConvertedAmount(tempAmount);
}
 const convert=(e)=>
  {
   e.preventDefault()
    setConvertedAmount(amount*ratesData[To]);
  }

 useEffect(() => {
   if (ratesData) {
     setIsLoading(true);
     try {
        const availableCurrencies = Object.keys(ratesData);
        setOptions(availableCurrencies);
        console.log('Available currencies:', availableCurrencies);
      } catch (error) {
        console.error('Error processing currencies:', error);
      } 
    }
  }, [ratesData]); 

  return (
    <>
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: 'url(/bg-1.jpg)' }}
      />
      <h1 className='xsm:text-4xl sm:text-4xl md:text-6xl text-blue-950 text-gap underline  sm:py-6 md:py-7 text-center'>
        CURRENCY CONVERTER
      </h1>
      <div className="w-full h-full relative mt-15 flex flex-row items-center justify-center">
        <form>
          <Inputform 
            label='FROM' 
            amount={amount}
            onAmountChange={(value) => setAmount(value)}
            selectedCurrency={From}
            options={options}
            set={(arg)=>{setFrom(arg)}}
          />
          <br />
          <div className="button flex  h-15 ml-15 rounded-2xl mb-8 w-30 items-center justify-center bg-blue-900">
            <button onClick={swap} className="text-white  text-1xl relative ">
            swap
          </button>
            </div>         
           <Inputform 
            label='TO' 
            amount={convertedAmount}
            onAmountChange={(value) => setConvertedAmount(value)}
            selectedCurrency={To}
            set={(arg)=>{setTo(arg)}}
            options={options}
            
          />
          <div className="text-sm flex justify-center p-2 ml-10 h-12 w-40 rounded-2xl border-black border-2  bg-amber-50 align-middle submit-button">
          <button type='submit' onClick={convert}>
              CONVERT CURRENCY
          </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;