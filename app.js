// Figure out endpoint to API `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=${lat}&longitude=${long}&maxradius=10`
// Backtics allow for javascript to be placed in a string if preceded by: ${javascript code}<--Template string
// make form to set variables of lat and long to be placed within the URL
// learn how to geolocate in Javascript
// maybe a couple of input boxes in a form and a button that uses user's current location
// Filter() out all but the closest 5 to your location
//API key: AIzaSyCw3WAWdzApD1SkO90niza4gxr5YrZah2M
var button = document.querySelector("#secretID")

button.addEventListener("click", submit)

function submit(event){
    event.preventDefault()
    var userEntry = document.querySelector("#google").value
    theOldFaithful(userEntry)
}

function theOldFaithful(userEntry){
    var addressUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${userEntry}&key=AIzaSyCw3WAWdzApD1SkO90niza4gxr5YrZah2M`
    fetch(addressUrl)
    .then(response => response.json())
    .then(response => {
        var lat = response.results[0].geometry.location.lat
        var long = response.results[0].geometry.location.lng
        populateTheThing(lat,long)
    })
}

function populateTheThing(lat, long){
    const magicUrl = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=${lat}&longitude=${long}&maxradius=50`
    fetch(magicUrl)
    .then(response => response.json())
    .then(response => {
        
        document.querySelector("#mag1").textContent = "magnitude: " + response.features[0].properties.mag
        document.querySelector("#location1").textContent = "location: " + response.features[0].properties.place
        document.querySelector("#coordinates1").textContent =  "latitude: " + response.features[0].geometry.coordinates[1] + ", " +
            "longitude: " + response.features[0].geometry.coordinates[0]
        ///////////
        document.querySelector("#mag2").textContent = "magnitude: " + response.features[1].properties.mag
        document.querySelector("#location2").textContent = "location: " + response.features[1].properties.place
        document.querySelector("#coordinates2").textContent = "latitude: " + response.features[1].geometry.coordinates[1]+ ", " +
        "longitude: " + response.features[1].geometry.coordinates[0]
        ///////////
        document.querySelector("#mag3").textContent = "magnitude: " + response.features[2].properties.mag
        document.querySelector("#location3").textContent = "location: " + response.features[2].properties.place
        document.querySelector("#coordinates3").textContent = "latitude: " + response.features[2].geometry.coordinates[1]+ ", " +
        "longitude: " +  response.features[2].geometry.coordinates[0]
        ///////////
        document.querySelector("#mag4").textContent = "magnitude: " + response.features[3].properties.mag
        document.querySelector("#location4").textContent = "location: " + response.features[3].properties.place
        document.querySelector("#coordinates4").textContent = "latitude: " + response.features[3].geometry.coordinates[1]+ ", " +
        "longitude: " +  response.features[3].geometry.coordinates[0]
        ///////////
        document.querySelector("#mag5").textContent = "magnitude: " + response.features[4].properties.mag
        document.querySelector("#location5").textContent = "location: " + response.features[4].properties.place
        document.querySelector("#coordinates5").textContent = "latitude: " + response.features[4].geometry.coordinates[1]+", " +
        "longitude: " +  response.features[4].geometry.coordinates[0]
    })
    document.querySelector("#one").hidden =false
    document.querySelector("#two").hidden =false
    document.querySelector("#three").hidden =false
    document.querySelector("#four").hidden =false
    document.querySelector("#five").hidden =false   

}
