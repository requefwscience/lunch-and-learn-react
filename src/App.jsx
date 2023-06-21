import * as React from 'react';
import { Info, Form, History } from './components';
import useLocalStorage from './use-local-storage';
import { check } from './api';

export default function App() {
  const [history, setHistory] = useLocalStorage('history', []);

  const [data, setData] = React.useState(() =>
    history.length > 0 ? history[0] : null
  );

  function handleSubmit(value) {
    const existingItem = history.find((item) => item.number === value);

    if (existingItem) {
      setData(existingItem);
      return;
    }

    check(value).then((response) => {
      const data = { ...response, number: value };
      setData(data);
      setHistory([data, ...history]);
    });
  }

  return (
    <main className="main">
      <Info data={data} />

      <Form
        key={data?.number}
        initialValue={data?.number}
        onSubmit={handleSubmit}
      />

      {history.length > 0 && (
        <History
          history={history}
          onItemSelect={(item) => setData(item)}
          onItemRemove={(itemToBeRemoved) =>
            setHistory(history.filter((item) => item !== itemToBeRemoved))
          }
        />
      )}
    </main>
  );
}
