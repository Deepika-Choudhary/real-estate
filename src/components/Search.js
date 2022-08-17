import { React, useState } from "react";
// import { FormControl, Input, FormLabel } from "@material-ui/core";

const Search = () => {
  return (
    <div className="ml-20">
      <div className="grid gap-1 mb-2 md:grid-cols-2">
        <h2 className="text-4xl font-medium my-8">Search properties to rent</h2>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-60 h-10 mt-10 pl-10 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search With Searchbar"
        />
      </div>
      <div>
        <form>
          <div className="grid gap-1 mb-2 md:grid-cols-5">
            <div>
              <label
                for="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Location"
              />
            </div>

            <div>
              <label
                for="When"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                When
              </label>
              <input
                type="text"
                id="When"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="When"
              />
            </div>

            <div>
              <label
                for="Price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Price
              </label>
              <input
                type="text"
                id="Price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Price"
              />
            </div>

            <div>
              <label
                for="Property Type"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Property Type
              </label>
              <input
                type="text"
                id="Property Type"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Property Type"
              />
            </div>
            <button className="rounded-xl mx-12 mt-4 text-white bg-purple-500">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
