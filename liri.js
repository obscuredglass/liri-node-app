// consts

require("dotenv").config();

const Spotify = require("node-spotify-api");
const Spotify = new Spotify(keys.Spotify);
const keys = require("./keys.js");
const moment = require("moment");
const fs = require("fs");
let omdb = (keys.omdb);
let bandsintown = (keys.bandsintown);

//var

var userInput = process.argv[2];
var userQuery = process.argv.slice[3].join(" ");

//func

function userCommand(userInput, userQuery) {

switch (userInput) {
case "concert-this":
  concertthis();
  break;

case "spotify-this-song":
spotifythissong();
  break;

case "movie-this":
  moviethis();
  break;

case "do-what-it-says":
  dowhatitsays(userQuery);
  break;

  default:
  console.log("Error");
  break;
}
}