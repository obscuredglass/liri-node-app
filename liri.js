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
  request(queryUrl, function (error, response, body) {
    axios.get(queryUrl).then(
      function (reponse) {

        console.log("===============");
        console.log("Name of the venue" + response.data[0].venue.name + "\r\n");
        console.log("Venue location: " + reponse.data[0].venue.city + "\r\n");
        console.log("Date of event: ") + moment(reponse.data[0].datetime).formate("MM-DD-YYYY");

        var concertLog = "====Concert info=====" + "\nName of the band" + artist

      }
    )
  })
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

  var queryURL = "https://www.omdbapi.com/?t=" + userQuery + "&apikey=trilogy";

  request(queryUrl, function (error, response, body) {

      if (!error && response.stausCode === 200) {
        var movieData = JSON.parse(body);
        var queryUrlReturn =
          "Title: " + movieData.Title + "\n" +
          "Year: " + movieData.Year + "\n" +
          "IMDB Ration: " + movieData.Ratings[0].Value +
          "\n" +
          "Rotten Tomatoes Rating: " + movieData.Rating[1].Value + "\n" +
          "Origin Contry: " + movieData.Country + "\n" +
          "Plot: " + movieData.Plot + "\n" +
          "Actors: " + movieData.Actors + "\n"

      }
    }

  )

};
