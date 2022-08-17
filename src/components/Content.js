import React, { useState, useEffect } from "react";
// import { baseURL, fetchApi } from "./fetchApi";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0e5c9272f8msh0c40a6f7a67cc9ap187953jsn1fe00a2e87ff",
    "X-RapidAPI-Host": "real-estate-usa.p.rapidapi.com",
  },
};

// const url =
//   "https://real-estate-usa.p.rapidapi.com/api/v1/properties?postal_code=94105&offset=0&limit=200";

fetch(
  "https://real-estate-usa.p.rapidapi.com/api/v1/properties?postal_code=94105&offset=0&limit=200",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const Content = () => {
  // async function postData() {
  //   const res = await fetch(
  //     "https://real-estate-usa.p.rapidapi.com/api/v1/properties?postal_code=94105&offset=0&limit=200",
  //     {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "0e5c9272f8msh0c40a6f7a67cc9ap187953jsn1fe00a2e87ff",
  //         "X-RapidAPI-Host": "real-estate-usa.p.rapidapi.com",
  //       },
  //       body: JSON.stringify(postData),
  //     }
  //   );
  //   const data = await res.json();
  //   console.log(data);
  // }
  // postData();

  return (
    <div className="flex">
      <div className="border-black border-2 p-3 ml-20 m-10 w-25 h-40">
        <img src="" />
        <h3 className="font-bold text-purple-500">$2095/month</h3>
        <h3 className="font-medium">Palm Harbor</h3>
        <h3 className="font-light text-gray-500">Location</h3>
        <p>3 bedroom 2 bathroom area</p>
      </div>
    </div>
  );
};

// export async function getStaticProps() {
//     const propertyForSale = await fetchApi(
//     `${baseURL}/api/v1/properties?postal_code=94105&offset=0&limit=200`
//   );

//   return {
//     props: {
//       propertiesForSale: propertyForSale?.hits,
//     },
//   };
// }

export default Content;
