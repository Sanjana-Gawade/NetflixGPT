import React, { useState } from "react";
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from "./GPTMovieSuggestions";
import { backgroundImage } from "../utils/constants";
import { searchButtonClick } from "../utils/gptSlice";
import { useSelector } from "react-redux";

const GPTSearch = () => {
  const searchButtonStatus = useSelector(
    (store) => store.gpt.searchButtonClick
  );

  return (
    <>
      <div className="fixed -z-10 ">
        <img
          className="h-screen w-screen object-cover"
          src={backgroundImage}
        ></img>
      </div>
      <div className="">
        <GPTSearchBar />
        {searchButtonStatus && <GPTMovieSuggestion />}
      </div>
    </>
  );
};

export default GPTSearch;
