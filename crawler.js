/* request für HTTP requests -
cheerio zum parsen der HTML Elemente -
URL um URLs zu parsen
 */

var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');


/* Fetching engelhorn.de
bzw. die Kategorie Hemden
 */

var page_to_visit = "http://www.engelhorn.de/fashion/herren/bekleidung/hemden";
console.log("Besuchte Seite " + page_to_visit);
request(page_to_visit, function(error, response, body) {

    // Fehlermeldung, falls es zu einem Error kommt
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


        /* Alle notwendigen Informationen werden nun abgefragt
        Preise - Bezeichnungen - normale Preise - Sale Preise - Datum
         */

        // Alle Preise mit regex
        var prices = (body_elements('.product-price span').text());
        var prices_regex = prices.replace(/\s\s+/g, ' ');
        console.log("Alle Preise: \n" + prices_regex)

        // Alle Marken mit regex
        var brands = (body_elements('.brand').text());
        var brands_regex = brands.replace(/\s\s+/g, ' ');
        console.log("Alle Marken: \n" + brands_regex)

        // Alle Bezeichnungen mit regex
        var names = (body_elements('.name-link').text());
        var names_regex = names.replace(/\s\s+/g, ' ');
        console.log("Alle Bezeichnungen: \n" + names_regex)

        // Aktuelles Datum
        var currentTime = new Date();
        console.log("Heutiges Datum: \n:" + currentTime)
    }
});