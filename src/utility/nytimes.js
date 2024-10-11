import axios from "axios";

export async function fetchRSS() {
  const itemsArray = []; // Array to hold the fetched items

  try {
      const rssUrl = "https://moxie.foxnews.com/google-publisher/latest.xml";
      const response = await axios.get(rssUrl);
      const rssData = response.data;

      // Parse the RSS data using DOMParser
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(rssData, "application/xml");

      // Get all <item> elements in the RSS feed
      const items = xmlDoc.querySelectorAll("item");

      items.forEach((item) => {
          // Extract the desired fields from the item
          const title = item.querySelector("title")?.textContent || "No title";
          const pubDate = item.querySelector("pubDate")?.textContent || "No date";
          const link = item.querySelector("link")?.textContent || "#";

          // Extract media content (media:content namespace handling)
          const mediaContent = item.getElementsByTagNameNS("http://search.yahoo.com/mrss/", "content")[0]?.getAttribute("url") || "No image";

          // Extract the content:encoded field properly (namespace handling)
          const contentEncoded = item.getElementsByTagNameNS("http://purl.org/rss/1.0/modules/content/", "encoded")[0]?.textContent || "No content";

          // Remove HTML tags from the content
          const cleanContent = contentEncoded.replace(/<\/?[^>]+(>|$)/g, "");

          // Extract categories as an array of strings
          const categories = Array.from(item.querySelectorAll("category")).map((cat) => cat.textContent);

          // Create an object with the extracted data
          const newItem = {
              title,
              pubDate,
              link,
              imageURL: mediaContent,
              content: cleanContent,
              categories // Array of categories
          };

          // Add the new item to the array
          itemsArray.push(newItem);
      });

      if (itemsArray.length === 0) {
          console.log("No items found in RSS feed.");
      }
  } catch (error) {
      console.error("Failed to fetch RSS feed:", error);
  }

  // Return the array with all the fetched items
  return itemsArray;
}

export default fetchRSS;
