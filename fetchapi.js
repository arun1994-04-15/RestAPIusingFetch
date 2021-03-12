var body = document.body;

var div = document.createElement("div")
div.setAttribute("class","conatiner")

var row = document.createElement("div")
row.setAttribute("class","row")
row.setAttribute("id","country")

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

    var column = document.createElement("div")
column.setAttribute("class","col-md-4 col-sm-6")

var card = document.createElement("div")
card.setAttribute("class","card-group")
card.style="width:15rem"

var img = document.createElement("img")
img.setAttribute("src","")
img.setAttribute("class","card-img-top")
img.innerText = `${obj[i].flag}`

var cardbody = document.createElement("div")
cardbody.setAttribute("class","card-body")

var heading = document.createElement("h5")
heading.setAttribute("class","card-title")
heading.innerText =`${obj[i].name}`

var population = document.createElement("p")
population.setAttribute("class","card-pop")
population.innerText = `${obj[i].population}`

var capital = document.createElement("p")
capital.setAttribute("class","card-capital")
capital.innerText = `${obj[i].capital}`

var region = document.createElement("p")
region.setAttribute("class","card-region")
region.innerText = `${obj[i].region}`


var button = document.createElement("button")
button.innerText ="Weather"
button.setAttribute("class","btn btn-outline-danger")
// button.addEventListener('click' () =>{
//   alert("Weather")
// })

region.append(button)
capital.append(region)
population.append(capital)
heading.append(population)
cardbody.append(heading)
img.append(cardbody)
card.append(img)
column.append(card)
row.append(column)
    
    
  }

 

}




div.append(row)
body.append(div)

