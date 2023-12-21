import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // Retrieve the stored value from local storage
  const storedValue = JSON.parse(localStorage.getItem(key));

  // Initialize state with the stored value or the provided initial value
  const [value, setValue] = useState(storedValue || initialValue);

  // Update local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
