// external_functions.js einbinden
const external_functions = require('./external_functions');


/* request für HTTP requests -
cheerio zum parsen der HTML Elemente -
URL um URLs zu parsen
 */

var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');


// Fetching engelhorn.de bzw. die Kategorie Hemden


var page_to_visit = "http://www.engelhorn.de/fashion/herren/bekleidung/strickjacken";
console.log("Besuchte Seite " + page_to_visit);
request(page_to_visit, function(error, response, body) {

  // Fehlermeldung, falls es zu einem Error kommt
  if(error) {
    console.log("Error: " + error);
  }

  // Statuscode checken (200 -> HTTP OK)
  console.log("Status code: " + response.statusCode);
  if(response.statusCode === 200) {

    // Parsen des Body´s - speichern in Variable $
    var $ = cheerio.load(body);

    // Titel der Seite auslesen der in der Variable body_elements gespeichert ist
    console.log("Seitentitel:  " + $('title').text());

    var products = []; // Leeren Array für ALLE Produkte anlegen
    $(".product-tile").each(function(){ // Funktion für jedes Produkt ausführen
      var product = []; // Leeren Array für EINZELNES Produkt anlegen
      // Produktinformationen extrahieren, ggf. formatieren und in den Array pushen
      var product_id = $(this).attr("data-itemid");
      var product_price = $(this).find('div > div.product-information > div.product-price > span.price-sales').text().replace(/(\r\n\t|\n|\r\t)/gm,"");
      var product_brand = $(this).find('div > div.product-information > div.product-name > div.brand').text().replace(/(\r\n\t|\n|\r\t)/gm,"");
      var product_name = $(this).find('div > div.product-information > div.product-name > div.name > a').text().replace(/(\r\n\t|\n|\r\t)/gm,"");
      var current_time = external_functions.current_time();
      product.push(product_id, product_price, product_brand,product_name, current_time);
      products.push(product); // Produkt Array des einzelnen Produktes in Produkt Array aller Produkte pushen
    });
    console.log(products);


  }
});