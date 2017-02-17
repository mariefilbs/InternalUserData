import $ from "jquery";

function makeRequest (callback) {
  $.ajax({
    url: `https://randomuser.me/api/?results=12`,
    dataType: 'json',
    success: callback
  })
}

export {makeRequest};
