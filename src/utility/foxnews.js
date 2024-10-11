import axios from "axios";

async function fetchFoxNews() {
    const itemsArray = []; // Array to hold the fetched items

    try {
        const rssUrl = "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml";
        const response = await axios.get(rssUrl);
        const rssData = response.data;

        // Parse the XML data using the browser's DOMParser
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(rssData, "application/xml");

        const items = xmlDoc.getElementsByTagName("item");

        if (items.length > 0) {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];

                // Extract the desired fields
                const newItem = {
                    title: item.getElementsByTagName("title")[0]?.textContent || "",
                    pubDate: item.getElementsByTagName("pubDate")[0]?.textContent || "",
                    link: item.getElementsByTagName("link")[0]?.textContent || "",
                    imageURL: item.getElementsByTagNameNS("http://search.yahoo.com/mrss/", "content")[0]
                        ? item.getElementsByTagNameNS("http://search.yahoo.com/mrss/", "content")[0].getAttribute("url")
                        : null,
                };

                // Add the new item to the array
                itemsArray.push(newItem);
            }
        } else {
            console.log("No items found in RSS feed.");
        }
    } catch (error) {
        console.error("Failed to fetch RSS feed:", error);
    }

    // Return the array with all the fetched items
    return itemsArray;
}

export default fetchFoxNews;
