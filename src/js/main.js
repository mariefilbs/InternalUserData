import $ from "jquery";

import {makeRequest} from './request.js';

function storeData (data) {
  //console.log(data);
  for(var i = 0; i < data.results.length; i++) {
  var field = data.results[i];
  console.log(field);

  //name variable for the info that I want
  var picture = field.picture.large;
  var firstname = field.name.first;
  var lastname = field.name.last;
  var email = field.email;
  var street = field.location.street;
  var city = field.location.city;
  var state = field.location.state;
  var zip = field.location.postcode;
  var phone = field.phone;
  var social = field.cell;

  var insertHTML = `
    <div class ="each-result">
      <img src ="${picture}"/>
      <div class ="name"> ${firstname} ${lastname}</div>
      <div class ="email"> ${email} </div>
      <div class = "address" id ="street"> ${street}</div>
      <div class = "address" id ="state"> ${city} ${state} ${zip} </div>
      <div class ="phone"> ${phone}</div>
      <div class ="social"> ${social}</div>
  `;

  $(".random-users").append(insertHTML);
  };
 };


makeRequest(storeData);
