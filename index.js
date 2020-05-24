"use strict";
let fs = require("fs");
let jsondata = require("./persons.json");

fs.readFile("./persons.json", "utf-8", (err, data) => {
  if (err) throw err;
  data = JSON.parse(data);
  let persons = data.persons;
  let cars = data.cars;
  // for every person in this persons array
  for (let i = 0; i < persons.length; i++) {
    // we are getting person
    let person = persons[i];
    // filtering every car he have!
    let personCars = cars.filter((ch) => ch.personId === person.id);
    // create file name
    let filename = `${person.first_name.toLowerCase()}_${person.last_name.toLowerCase()}.json`;
    // i'm just gonna assume that u want to create your files stringified again so
    // create person's json data
    let data = JSON.stringify({ person, cars: personCars });
    // so here we are assuming again that u have a cars/ directory in the same path
    fs.writeFile(`./cars/${filename}`, data, () => {
      // i'm not sure what to use for this maybe consoling every person's file created!
      console.log(person.first_name, " file created!");
    });
  }
});

/* fs.mkdtemp("cars", (err) => {
  if (err) throw err;
  fs.readFile("../persons.json", "utf-8", (err, data) => {
    if (err) throw err;
    jsondata = JSON.parse(data);
    let persons = jsondata.persons;
    let cars = jsondata.cars;

    // if (persons.id === cars.id) {
    //   jsondata = JSON.stringify(data);
    //   let naam = (
    //     persons["first_name"] +
    //     "_" +
    //     persons["last_name"]
    //   ).toString();
    //   fs.writeFile(`cars/${naam}.json`, jsondata, () => {});
    // } else {
    //   console.log(err);
    // }
  });
});
 */
