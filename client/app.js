function getBathValue() {
  var uiBathrooms = document.getElementsByName("uiBathrooms");
  for (let i = 0; i < uiBathrooms.length; i++) {
    if (uiBathrooms[i].checked) {
      return parseInt(uiBathrooms[i].value);
    }
  }
  return -1;
}

function getBHKValue() {
  var uiBHK = document.getElementsByName("uiBHK");
  for (let i = 0; i < uiBHK.length; i++) {
    if (uiBHK[i].checked) {
      return parseInt(uiBHK[i].value);
    }
  }
  return -1;
}

function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");
  var sqft = document.getElementById("uiSqft").value;
  var bhk = getBHKValue();
  var bathrooms = getBathValue();
  var location = document.getElementById("uiLocations").value;
  var estPrice = document.getElementById("uiEstimatedPrice");

  const url = "http://127.0.0.1:5000/predict_home_price";

  $.post(url, {
      total_sqft: parseFloat(sqft),
      bhk: bhk,
      bath: bathrooms,
      location: location
  }, function(data, status) {
      console.log("Response:", data);
      let price = Number(data.estimated_price);

      // If price has no decimals, show integer
      // If it has decimals, show up to 2 decimals
      let formattedPrice = (price % 1 === 0) ? price.toString() : price.toFixed(2);

      estPrice.innerHTML = `<h2>${formattedPrice} Lakh</h2>`;
  });
}

function onPageLoad() {
  const url = "http://127.0.0.1:5000/get_location_names";
  $.get(url, function(data, status) {
      console.log("got response for get_location_names request");
      if (data) {
          var locations = data.locations;
          var uiLocations = document.getElementById("uiLocations");
          $('#uiLocations').empty();
          for (let i = 0; i < locations.length; i++) {
              var opt = new Option(locations[i]);
              $('#uiLocations').append(opt);
          }
      }
  });
}

window.onload = onPageLoad;
