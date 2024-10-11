const axios = require("axios");
const xml2js = require('xml2js');

async function fetchCNN() {
  try {
    const rssUrl = "http://rss.cnn.com/rss/cnn_topstories.rss"; // CNN RSS feed URL

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
      const newsArticles = []; // Initialize an array to hold news articles

      items.forEach((item) => {
        // Push each item's details into the newsArticles array
        newsArticles.push({
          title: item.title,
          link: item.link,
          description: item.description,
          pubDate: item.pubDate
        });
      });

      // Log the newsArticles array
      console.log(newsArticles);
    });
  } catch (error) {
    console.error("Failed to fetch RSS feed:", error);
  }
}