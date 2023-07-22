const countriesList = require('countries-list');

const allCountriesArray = Object.keys(countriesList.countries).map((countryCode) => {
  return {
    code: countryCode,
    name: countriesList.countries[countryCode].name,
    timezone: countriesList.countries[countryCode].timezone,
  };
});

export default allCountriesArray;