var data = fetch("https://restcountries.eu/rest/v2/all");

data
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    dispalycountries(obj);
  })
  .catch(function (err) {
    console.log(err);
  });

function dispalycountries(obj) {
  var countries = document.getElementById("country");

  for (var i = 0; i < obj.length; i++) {
    var card = `<div class="col-md-4 col-sm-6">
        <div class="card-group" style="width:15rem" >
          <img src="${obj[i].flag}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title" id="id1">${obj[i].name}</h5>
            <p class="card-capital">Population: ${obj[i].population}</p>
            <p class="card-capital">Capital: ${obj[i].capital}</p>
            <p class="card-capital">Region: ${obj[i].region}</p>
            <button onclick="weather(${obj[i].name})" class="btn btn-outline-danger"> Weather </button>
          </div>
        </div>
      </div>`;
    countries.innerHTML += card;
    
  }
}

function weather(countryname){
  var data1 = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${countryname}&appid=0d33e53012116e5f0c14e4f77f0ccd0f`);
  data1
  .then(function (res) {
    return res.json();
  })
  .then(function (obj1){
    alert(obj1.weather[0].main)
  })
  }

