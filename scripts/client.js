// let cities = ["Athens", "Latham", "Sanford", "St. Paul"];

let cities = "Anthens, Latham, Sanford, St. Paul";

console.log(Array.isArray(cities));

let citiesArray = cities.split(", ");
console.log(citiesArray);

let citiesList = document.getElementById("cities");
// console.log(citiesList)

let isMinneapolis = false;
for (let city of citiesArray) {
    citiesList.innerHTML += `<li>${city}</li>`;
    isMinneapolis = city === 'Minneapolis';
}

console.log('Was Minneapolis here?', isMinneapolis ? 'Yes' : 'No');

let isMinneapolisAgain = citiesArray.indexOf('Minneapolis') !== -1;
console.log('Was Minneapolis here?', isMinneapolisAgain ? 'Yes' : 'No')

let newCities = "Athens, Latham, Sanford, St. Paul, Bikini Bottom, Athens, NY, DC, Athens, Minneapolis";

let newCitiesArray = newCities.split(",");
console.log(newCitiesArray);

let newCitiesFixedArray = newCitiesArray.map((city) => {
	return city.trim();
});  // map is a way of applying functions to every array.

console.log(newCitiesFixedArray);

for (let city of newCitiesFixedArray) {
    while (newCitiesFixedArray.indexOf(city) !=
           newCitiesFixedArray.lastIndexOf(city)) {
        let removeIndex = newCitiesFixedArray.indexOf(city);
        newCitiesFixedArray.splice(removeIndex, 1);
    }
}
console.log(newCitiesFixedArray);