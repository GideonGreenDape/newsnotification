import fetchRSS from "../utility/nytimes";
import { useEffect, useState } from "react";

function NewsTemplate() {
  const pathname = window.location.pathname;
  const id = pathname.split("/").pop();
  const value = Number(id);

  const [title, settitle] = useState("");
  const [pubDate, setpubDate] = useState("");
  const [content, setcontent] = useState("");
  const [imagelink, setimagelink] = useState("");

  useEffect(() => {
    const getRSSData = async () => {
      try {
        const rssItems = await fetchRSS();
        if (rssItems.length > 0) {
          settitle(rssItems[value].title);
          setpubDate(rssItems[value].pubDate);
          setimagelink(rssItems[value].imageURL);

          // Get the content and trim it to 100 words or less
          const originalContent = rssItems[value].content;
          const wordsArray = originalContent.split(" ");
          
          // If the content is longer than 100 words, trim it
          const trimmedContent = wordsArray.length > 90 
            ? wordsArray.slice(0, 90).join(" ") + "."
            : originalContent;
          
          setcontent(trimmedContent);
        }
      } catch (error) {
        console.error("Error fetching RSS data", error);
      }
    };
    getRSSData();
  }, [value]);

  return (
    <div className=" mx-[45px] mt-[42px] ">
      <div className="flex-col items-start">
        <p className="font-montserrat font-bold text-[19px] w-[630px]">
          {title}
        </p>
        <p className="font-montserrat mt-[4px] font-medium text-darkgray text-[13px] ">
          {pubDate}
        </p>
        <div className="flex justify-between items-start ">
        <p className="font-montserrat font-regular text-[16px] mt-[30px] w-[630px] " >{content}</p>
        <div className="w-[500px] h-[300px] ">
        <img className="w-full h-full object-cover object-top" src={imagelink} alt="content image" />
      </div>
        </div>
      </div>
    </div>
  );
}

export default NewsTemplate;
