import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import {useResultContext} from "../contexts/ResultContextProvider";
import  Links  from './Links';


function Search() {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState('');
  const [debouncedValue] = useDebounce(text, 300);

  // useEffect(() => {
    
  //   if (debouncedValue) setSearchTerm(debouncedValue);
  // }, [debouncedValue]);

  const handleChange = () =>
    {
      setSearchTerm(text);
    }

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {/* {text !== '' && (
        <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
          x
        </button>
      )} */}

      <button type="button" className='m-5 text-xl bg-blue-500  text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900' onClick={handleChange}> 
        Search
      </button>
      <Links />
    </div>
  );
}

export default Search;