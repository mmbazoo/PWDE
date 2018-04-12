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

var page_to_visit = "https://www.reichelt.de/USB-Hubs/2/index.html?ACTION=2&LA=514&GROUPID=6906";
console.log("Besuchte Seite " + page_to_visit);
request(page_to_visit, function(error, response, body) {
    // Fehlermeldung falls es zu einem Error kommt
    if(error) {
        console.log("Error: " + error);
    }
    // Statuscode checken (200 -> HTTP OK)
    console.log("Status code: " + response.statusCode);
    if(response.statusCode === 200) {
        // Parsen des Body´s - speichern in Variable body_elements
        var body_elements = cheerio.load(body);
        // Titel der Seite auslesen der in der Variable body_elements gespeichert ist
        console.log("Seitentitel:  " + body_elements('title').text());
    }
});