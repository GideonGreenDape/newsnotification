const axios = require("axios");
const xml2js = require("xml2js");


async function fetchFederalReserve() {
    const itemsArray = []; // Initialize an array to hold the items
  
    try {
      const rssUrl = "https://www.federalreserve.gov/feeds/press_all.xml"; // Federal Reserve RSS feed URL
  
      // Fetch RSS feed data using axios
      const response = await axios.get(rssUrl);
      const rssData = response.data; // The XML data returned from the RSS feed
  
      // Parse the XML data into a JavaScript object (JSON)
      const parser = new xml2js.Parser({ explicitArray: false });
      parser.parseString(rssData, (err, result) => {
        if (err) {
          console.error("Error parsing RSS feed:", err);
          return;
        }
        const items = result.rss.channel.item; // Extract the news articles
  
        items.forEach((item) => {
          // Push each item into the array
          itemsArray.push({
            title: item.title,
            link: item.link,
            description: item.description,
            pubDate: item.pubDate
          });
        });
        
        // Optionally log the array of items
        console.log(itemsArray);
      });
    } catch (error) {
      console.error("Failed to fetch RSS feed:", error);
    }
  }
  

  export default fetchFederalReserve;