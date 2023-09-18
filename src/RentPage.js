import React, { useState } from "react";
import DropDown from "./Components/DropDown";
import PropertyCard from "./Components/PropertyCard";
import data from "./data";
import { locState } from "./atoms/locState";
import { priceState } from "./atoms/priceState";
import { useRecoilValue, useRecoilState } from "recoil";
import { Slider, DatePicker, Input } from "antd";
import "antd/dist/antd.css";
const { Search } = Input;
export const RentPage = () => {
  var locList = ["TX", "FL", "IN"];
  var loc = useRecoilValue(locState);
  var [price, setPrice] = useRecoilState(priceState);
  var [startDate, setStartDate] = useState(new Date(2100, 0, 1));
  var [searchQuery, setSearchQuery] = useState("");
  var filteredData = data.properties.filter(
    (property) =>
      property.cost > price[0] &&
      property.cost < price[1] &&
      property.address.includes(loc) &&
      isDateValid(property.startDate) &&
      (property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  function isDateValid(date) {
    return date.getTime() <= startDate.getTime();
  }
  const onDateChange = (date, dateString) => {
    console.log(date);
    console.log(new Date(dateString));
    date == null
      ? setStartDate(new Date(2100, 0, 1))
      : setStartDate(new Date(dateString));
  };
  const onSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <div className="flex items-center">
        <div className="font-raleway font-bold text-3xl my-4">
          Search properties to rent
        </div>
      </div>
      <div className="bg-secondary h-16 shadow-md mx-auto flex justify-evenly items-center rounded-3xl font-raleway">
        <DropDown items={locList} label="Location" />
        <div className="flex flex-col text-sm text-gray-700 relative items-center">
          <div className="">Move in date</div>
          <DatePicker
            onChange={onDateChange}
            style={{
              border: 0,
              backgroundColor: "inherit",
              fontFamily: "inherit",
            }}
          />
        </div>
        <div className="w-52">
          Price Range
          <Slider
            range={{ draggableTrack: true }}
            min={0}
            max={50000}
            defaultValue={price}
            trackStyle={{ backgroundColor: "#7367F7" }}
            handleStyle={{ backgroundColor: "#7367F7", borderColor: "#F8F7FD" }}

            onChange={(value) => {
              setPrice(value);
            }}
          />
        </div>
        <div>
          <Search
            placeholder="Search with SearchBar"
            onChange={onSearch}
            style={{ width: 200 }}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredData.length === 0 ? (
          <div className="text-center text-gray-700 font-raleway text-4xl">
            No properties found
          </div>
        ) : (
          filteredData.map((property) => {
            return (
              <div className="m-5">
                <PropertyCard
                  name={property.name}
                  address={property.address}
                  beds={property.beds}
                  baths={property.baths}
                  area={property.area}
                  cost={property.cost}
                  imgUrl={property.imgUrl}
                  isPopular={property.isPopular}
                  isLiked={property.isLiked}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
