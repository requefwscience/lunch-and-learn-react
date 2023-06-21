import * as React from 'react';

export default function useLocalStorage(key, initialValue) {
  const [state, setState] = React.useState(() => {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
