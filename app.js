import { geocode } from "./utils/geocode.js";
import { forecast } from "./utils/forecast.js";
import process from "process";

const address = process.argv[2];
if (!address) {
  console.log("Please specify a location.");
} else {
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}
