// consts

require("dotenv").config();

var Spotify = require("node-spotify-api");
var Spotify = new Spotify(keys.Spotify);
const keys = require("./keys.js");
const moment = require("moment");
const fs = require("fs");
let omdb = (keys.omdb);
let bandsintown = (keys.bandsintown);

//var

var userInput = process.argv[2];
var userQuery = process.argv.slice[3].join(" ");

// switch func layout

function userCommand(userInput, userQuery) {

switch (userInput) {
case "concert-this":
  concertThis(userQuery);
  break;

case "spotify-this-song":
spotifyThisSong(userQuery);
  break;

case "movie-this":
  movieThis(userQuery);
  break;

case "do-what-it-says":
  doWhatItSays(userQuery);
  break;

  default:
  console.log("Error");
  break;
}
}


//concert this

function concertThis(userQuery){
  var artist = 
  var queryUrl = "https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp";
  request(queryUrl, function(error, response, body){
  axios.get(queryUrl).then(
  function(reponse) {

console.log("===============");
console.log("Name of the venue"  + response.data[0].venue.name + "\r\n");
console.log("Venue location: " + reponse.data[0].venue.city + "\r\n");
console.log("Date of event: ") + moment(reponse.data[0].datetime).formate("MM-DD-YYYY");

var concertLog = "====Concert info=====" + "\nName of the band" + artist




  }



)
  };


function spotifyThisSong(songName), function(err, data) {
  if (err) {
    return console.log("Error occured");
  }
  spotify.search({type: "track", query: songName}
  
  console.log("========");
  console.log("Artist Name: " + data.track.items[0].album.artists[0].name + "\r\n");
  console.log("Song Name: " + data.tracks.items[0].name + "\r\n");
  console.log("Track preview link: " + data.tracks[0].href + "\r\n");
  console.log("Album name: " + data.tracks.items[0].album.name + "\r\n");
  
  
  
  
  )


  




}




function moviethis() {

  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  request(queryUrl, function (error, response, body) {

    if (!error && response.stausCode === 200) {
      var movieData = JSON.parse(body);
      var queryUrlReturn =
      "Title: " + movieData.Title + "\n" +
      "Year: " + movieData.Year + "\n" +
      "IMDB Ration: " + movieData.Ratings[0].Value + 
      "\n" +
      "Rotten Tomatoes Rating: " + movieData.Rating[1].Value + "\n" +
      "Origin COuntry: " + movieData.Country + "\n" +
      "Plot: " + movieData.Plot + "\n" +
      "Actors: " + movieData.Actors + "\n"



    }


  }
  
  )



}