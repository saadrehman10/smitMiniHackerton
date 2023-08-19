"use client"
import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Initialize state with the value from localStorage or the provided initial value
  const [storedValue, setStoredValue] = useState(() => {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : initialValue;
  });

  // Update localStorage when the state changes
  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  // Remove item from localStorage
  const removeValue = () => {
    setStoredValue(null);
    localStorage.removeItem(key);
  };

  return [storedValue, setValue, removeValue];
};

export default useLocalStorage;
