import { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import Search from "../components/Search";
import axiosClient from "../axios.js";

export default function ListingSearch() {
  const [listings, setListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   getListings();
  // }, [searchQuery]);

  const updateSearchQuery = (e) => {
    let string = e.target.value;
    setSearchQuery(string);
    getListings(string);
  };

  const getListings = (query) => {
    axiosClient
      .get(`/listings?string=${query}`)
      .then((response) => {
        setListings(response.data);
      })
      .catch((err) => {
        console.error(err, err.response);
      });
  };

  const sortListings = (option) => {
    let copiedArr = [...listings];
    if (option === "lowest price") {
      copiedArr.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (option === "highest price") {
      copiedArr.sort((a, b) => {
        return b.price - a.price;
      });
    } else {
      // most recent
      copiedArr.sort((a, b) => {
        return Date.parse(a.date_online) - Date.parse(b.date_online);
      });
    }
    setListings(copiedArr);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Search
          handleChange={updateSearchQuery}
          query={searchQuery}
          sort={sortListings}
        />
        {listings.map((listing) => (
          <ListItem key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
