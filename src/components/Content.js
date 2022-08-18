import { ListItemSecondaryAction } from "@material-ui/core";
import React, { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0e5c9272f8msh0c40a6f7a67cc9ap187953jsn1fe00a2e87ff",
    "X-RapidAPI-Host": "real-estate-usa.p.rapidapi.com",
  },
};

const Content = () => {
  const [details, SetDetails] = useState(null);
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
    SetDetails(data.properties);
    console.log(details);
  }
  useEffect(() => {
    postData();
  }, []);

  return (
    <div className="flex">
      {/* //   <div className="border-black border-2 p-3 ml-20 m-10 w-25 h-40">
    //     <img src={items.listings[0].photos[0].href} />
    //     <h3 className="font-bold text-purple-500">
    //       ${items.listings[0].price}
    //     </h3>
    //     <h3 className="font-medium">Product Name {items.product_name}</h3>
    //     <h3 className="font-light text-gray-500">{items.listing[0].address}</h3>
    //     <p>
    //       {items.listings[0].beds} bedroom {items.listings[0].baths_full}{" "}
    //       bathroom {items.listings[0].raw_products.sqft} sqft area
    //     </p>
    //   </div> */}

      {details ? (
        <div className="grid grid-rows-5 grid-flow-col">
          {details.map((item) => {
            return (
              <div className="flex">
                <div className="border-black border-2 p-4 ml-20 mt-10 w-full h-50">
                  {/* <img src={item.listings[0].photo.href} /> */}
                  <h3 className="font-bold text-purple-500">
                    ${item.listings[0].price}
                  </h3>
                  <h3 className="font-medium">
                    Product Name {item.product_name}
                  </h3>
                  <h3 className="font-light text-gray-500">
                    {item.listings[0].address.city}
                  </h3>
                  <p>
                    {item.listings[0].beds} bedroom
                    {item.listings[0].baths_full}
                    bathroom {item.listings[0].sqft} sqft area
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        "No results found"
      )}
    </div>
  );
};

export default Content;
