import React, { FormEvent, useRef, useState } from 'react';
import './App.css';

import StoreService from './StoreService'

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const useStateWithLocalStorage = (localStorageKey: string): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [localStorageKey, value]);
  return [value, setValue];
};

interface Hit {
  title: string
  url: string
  objectID: string
}
interface SearchResults {
  hits: Hit[]
  page: number
}

const App: React.FC = () => {
  const storeService = new StoreService()
  const [hits, setHits] = useState([])
  const [query, setQuery] = useState("")

  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query === '') {
      return;
    }
    const cachedHits = storeService.getIfNotExpired(query)
    if (cachedHits) {
      setHits(cachedHits);
    } else {
      console.log('cache results not found. ')
      fetch('https://hn.algolia.com/api/v1/search?query=' + query)
        .then(response => response.json())
        .then(result => onSetResult(query, result));
    }
  };

  const onSetResult = (key: string, result: any) => {
    const expiration = new Date().getTime() + 5000;
    storeService.setWithExpiration(key, result.hits, expiration)
    setHits(result.hits)
  };

  return (
    <div>
      <h1>Search Hacker News with Local Storage</h1>
      <p>
        There shouldn't be a second network request, when you search
        for a keyword twice.
        </p>
      {/* Search Input */}
      <form onSubmit={onSearch}>
        <input type="text" onChange={e => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {/* Result */}
      {hits.map((item: Hit) => (
        <div key={item.objectID}>{item.title}</div>
      ))}
    </div>
  );
}

export default App;
