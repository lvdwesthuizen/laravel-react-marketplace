import { useEffect, useState } from "react";
import Listing from "../components/Listing";
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

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Search handleChange={updateSearchQuery} query={searchQuery} />
        {listings.map((listing) => (
          <Listing key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
