import React from 'react';

export default function Inputform({ 
  label, 
  amount, 
  onAmountChange, 
  selectedCurrency, 
  options = [], 
  set,
  
}) {
  return (
    <div className='relative bg-blue-200 rounded-lg shadow-sm p-4 w-full max-w-md mx-auto mb-4 xxl:max-w-2xl xxl:p-6'>
      {}
      <div className='flex flex-col space-y-2 xxl:space-y-4'>
        <label className='text-blue-800 font-medium xxl:text-xl'>{label}</label>
        
        <div className='flex flex-col xs:flex-row gap-2 xxl:gap-4'>
          {}
          <div className='flex-1'>
            <input 
              value={amount}
              onChange={(e) => onAmountChange?.(Number(e.target.value))}
              type="number"
              placeholder="Amount"
              className='w-full p-2 border border-black-300 rounded focus:ring-2 focus:ring-blue-500 
                        xxl:p-4 xxl:text-xl'
            
            />
          </div>
          
          {}
          <div className='w-full xs:w-auto xxl:w-48'>
            <select
              value={selectedCurrency}
              onChange={(e) => set?.(e.target.value)}
              className='w-full p-2 border border-black-300 rounded focus:ring-2 focus:ring-blue-500 
                        xxl:p-4 xxl:text-xl'
          
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}