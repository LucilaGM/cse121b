/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Lucila Guzmán Mijangos",
    photo: "images/Lucila.jpg",
    favoriteFoods: ["Pipian verde",
    "Carnitas", "Garnachas", "Tamales", "Empanadas"],
    hobbies: ["Cooking", "Dancing", "Swimming", "Learning", "Running"],
    placesLived: []
};




/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: "Cosamaloapan Veracruz, Mexico",
    length: "18 years",
});

  myProfile.placesLived.push({
    place: "Veracruz, Mexico",
    length: "1 year",
});

myProfile.placesLived.push({
    place: "Ciudad Juarez Chihuahua, Mexico",
    length: "1 year",
});

myProfile.placesLived.push({
    place: "Xalapa Veracruz, Mexico",
    length: "30 years",
});
  
  



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(function(food) {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(function(hobby) {
  let li = document.createElement("li");
  li.textContent = hobby;
  document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(function(place) {
  let dt = document.createElement("dt");
  dt.textContent = place.place;
  let dd = document.createElement("dd");
  dd.textContent = place.length;
  document.querySelector("#places-lived").appendChild(dt);
  document.querySelector("#places-lived").appendChild(dd);
});

