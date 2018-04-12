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

        // Preise sind in den <span> Tags - Engelhorn

        /* Erster Versuch
        console.log(body_elements('span[class=price-standard]').text());
         */

        /* Zweite Variante
        Alle Preise - Leerzeichen und leere Zeilen sind entfernt
         */
        var prices = (body_elements('.product-price span').text());
        var new_prices = prices.replace(/\s\s+/g, ' ');
        console.log("Alle Preise: \n" + new_prices)
    }
});