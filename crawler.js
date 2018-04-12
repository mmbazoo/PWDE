/* request für HTTP requests -
cheerio zum parsen der HTML Elemente -
URL um URLs zu parsen
 */

var request = require('request')
var cheerio = require('cheerio')
var URL = require('url-parse')


/* Fetching reichelt.de
bzw. die USB Hubs
 */

var pageToVisit = "https://www.reichelt.de/USB-Hubs/2/index.html?ACTION=2&LA=514&GROUPID=6906";
console.log("Visiting page " + pageToVisit);
request(pageToVisit, function(error, response, body) {
    if(error) {
        console.log("Error: " + error);
    }
    // Check status code (200 is HTTP OK)
    console.log("Status code: " + response.statusCode);
    if(response.statusCode === 200) {
        // Parsen des Body´s - speichern in Variable body_elements
        var body_elements = cheerio.load(body);
        // title der Seite auslesen der in Variable $ gespeichert ist
        console.log("Seitentitel:  " + body_elements('title').text());
    }
});