// consts

require("dotenv").config();
var request = require("request")
var keys = require("./keys.js");
const Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
const moment = require("moment");
const axios = require("axios");
const fs = require("fs");
let omdb = (keys.omdb);
let bandsintown = (keys.bandsintown);

//var

var userInput = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");

// switch func layout

// function userCommand(userInput, userQuery) {

switch (userInput) {
  case "concert-this":
    concertThis();
    break;

  case "spotify-this-song":
    spotifyThisSong();
    break;

  case "movie-this":
    movieThis();
    break;

  case "do-what-it-says":
    doWhatItSays();
    break;

  default:
    console.log("Error");
    break;
}



//concert this

function concertThis() {
  // var artist = 
  var queryUrl = "https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
      function (response) {

        if (response.data.length === 0) {
          return console.log("no results found");
        }

        console.log("===============");
        console.log("Name of the venue " + response.data[0].venue.name + "\r\n");
        console.log("Venue location: " + response.data[0].venue.city + "\r\n");
        console.log("Date of event: ") + moment(response.data[0].datetime).format("MM-DD-YYYY");

        var concertLog = "====Concert info=====" + "\nName of the band" + userQuery

      }
    )

}

// spotify

function spotifyThisSong() {
  if (userQuery === "") {
    userQuery = "The Sign"
  }
  spotify.search({
    type: "track",
    query: `${userQuery}`
  }, function (error, data) {
    if (error) {
      console.log(error)
    } else {
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Title: " + data.tracks.items[0].name);
      console.log("Preview: " + data.tracks.items[0].preview_url);
      console.log("Album: " + data.tracks.items[0].album.name);
    }
  })
  console.log(userQuery);
}



// omdb

function movieThis() {

  axios.get("https://www.omdbapi.com/?t=" + userQuery + "&apikey=trilogy").then(

      function(reponse) {
        var movieData = reponse.data;
        console.log(movieData);
        var queryUrlReturn =
          "Title: " + movieData.Title + "\n" +
          "Year: " + movieData.Year + "\n" +
          "IMDB Ration: " + movieData.Ratings[0].Value + "\n" +
          "Rotten Tomatoes Rating: " + movieData.Ratings[1].Value + "\n" +
          "Origin Contry: " + movieData.Country + "\n" +
          "Plot: " + movieData.Plot + "\n" +
          "Actors: " + movieData.Actors + "\n"
        // console.log(queryUrlReturn);
      }
  )
    

  

};
