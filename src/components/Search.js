import { React, useEffect, useState } from "react";

const Search = () => {
  const [data, setData] = useState([]);
  const [filterVal, setFilterVal] = useState("");
  const [searchApiData, setSearchApiData] = useState([]);
  async function postData() {
    const res = await fetch(
      "https://real-estate-usa.p.rapidapi.com/api/v1/properties?postal_code=94105&offset=0&limit=200",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "0e5c9272f8msh0c40a6f7a67cc9ap187953jsn1fe00a2e87ff",
          "X-RapidAPI-Host": "real-estate-usa.p.rapidapi.com",
        },
        body: JSON.stringify(postData),
      }
    );
    const data = await res.json();
    console.log(data.properties);
    setData(data.properties);
    console.log(data);
  }
  useEffect(() => {
    postData();
  }, []);
  const handleFilter = (e) => {
    if (e.target.value == "") {
      setData(searchApiData);
    } else {
      const filterResult = searchApiData.filter((item) =>
        item.listings[0].price.address.city
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      if (filterResult.length > 0) {
        setData(filterResult);
      } else {
        setData([{ price: "No data" }]);
      }
      setFilterVal(e.target.value);
    }
  };
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
                type="search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Price"
                onInput={(e) => handleFilter(e)}
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

// import React, { useState, useEffect } from "react";
// import { Card, Input } from "@material-ui/core";
// export default function Posts() {
//   const [APIData, setAPIData] = useState(null);
//   const [filteredResults, setFilteredResults] = useState([]);
//   const [searchInput, setSearchInput] = useState("");

//   // const [details, SetDetails] = useState(null);
//   async function postData() {
//     const res = await fetch(
//       "https://real-estate-usa.p.rapidapi.com/api/v1/properties?postal_code=94105&offset=0&limit=200",
//       {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key":
//             "0e5c9272f8msh0c40a6f7a67cc9ap187953jsn1fe00a2e87ff",
//           "X-RapidAPI-Host": "real-estate-usa.p.rapidapi.com",
//         },
//         body: JSON.stringify(postData),
//       }
//     );
//     const data = await res.json();
//     console.log(data.properties);
//     setAPIData(data.properties);
//     console.log(APIData);
//   }
//   useEffect(() => {
//     //   axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
//     //     setAPIData(response.data);
//     //   });
//     // }, []);

//     postData();
//   }, []);

//   const searchItems = (searchValue) => {
//     setSearchInput(searchValue);
//     if (searchInput !== "") {
//       const filteredData = APIData.filter((item) => {
//         return Object.values(item)
//           .join("")
//           .toLowerCase()
//           .includes(searchInput.toLowerCase());
//       });
//       setFilteredResults(filteredData);
//     } else {
//       setFilteredResults(APIData);
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <Input
//         icon="search"
//         placeholder="Search..."
//         onChange={(e) => searchItems(e.target.value)}
//       />
//       {/* <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}> */}
//       {searchInput.length > 1
//         ? filteredResults.map((item) => {
//             return (
//               <div className="flex">
//                 <div className="border-black border-2 p-4 ml-20 mt-10 w-full h-50">
//                   {/* <img src={item.listings[0].photo.href} /> */}
//                   <h3 className="font-bold text-purple-500">
//                     ${item.listings[0].price}
//                   </h3>
//                   <h3 className="font-medium">
//                     Product Name {item.product_name}
//                   </h3>
//                   <h3 className="font-light text-gray-500">
//                     {item.listings[0].address.city}
//                   </h3>
//                   <p>
//                     {item.listings[0].beds} bedroom
//                     {item.listings[0].baths_full}
//                     bathroom {item.listings[0].sqft} sqft area
//                   </p>
//                 </div>
//               </div>
//             );
//           })
//         : APIData.map((item) => {
//             return (
//               <div className="flex">
//                 <div className="border-black border-2 p-4 ml-20 mt-10 w-full h-50">
//                   {/* <img src={item.listings[0].photo.href} /> */}
//                   <h3 className="font-bold text-purple-500">
//                     ${item.listings[0].price}
//                   </h3>
//                   <h3 className="font-medium">
//                     Product Name {item.product_name}
//                   </h3>
//                   <h3 className="font-light text-gray-500">
//                     {item.listings[0].address.city}
//                   </h3>
//                   <p>
//                     {item.listings[0].beds} bedroom
//                     {item.listings[0].baths_full}
//                     bathroom {item.listings[0].sqft} sqft area
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//       {/* // </Card.Group> */}
//     </div>
//   );
// }
