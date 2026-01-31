import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

export const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    /*Debouncing is used in search inputs to delay the API call until the user stops typing, 
  instead of calling the API on every keystroke.
in debouncing make an api call after every key press but if the difference between 2 api call is less than 200ms then decline the api call  
*/
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200); // debouncing

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const result = await data.json();
    setSuggestions(result[1]);
    console.log("Api call-", result[1])

    // if not present in store then update store using dispatch

    dispatch(cacheResults({
      [searchQuery]:[result[1]]
    }));
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPGaE5u01ks19zFwpEOWL5TztqsqKEz7te3Ei-z1VodJz5Um1e_l8Cc7aBV1BrLSRwzrx&s=10"
        ></img>
        <img
          className="h-6 mx-2"
          alt="youtube"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        ></img>
      </div>
      <div>
        <div className="col-span-10 px-12">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            className="w-1/2 border border-gray-400 p-1 rounded-l-full"
            type="text"
          ></input>
          <button className="border border-gray-400 p-1 rounded-r-full">
            Search
          </button>

          {showSuggestion && (
            <div className="fixed bg-white py-2 px-5 w-[285.9px]">
              <ul>
                {suggestions.map((s) => (
                  <li className="py-2 px-5 bg-white">{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1">
        <img
          className="h-6"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        ></img>
      </div>
    </div>
  );
};
