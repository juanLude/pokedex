/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';

export const useDebounceValue = (input: string = '', time: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return debouncedValue;
};
