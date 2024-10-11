import nextpage from "../assets/icons/nextpage.svg";
import fetchRSS from "../utility/nytimes.js";
import { useEffect, useState } from "react";

function DesktopNews() {
  return (
    <div className="mx-[45px] mt-[12px]">
      <Important />
    </div>
  );
}

function Important() {
  const [Image, setImage] = useState(null);
  const [title, settitle] = useState(null);
  const [Headline,setHeadline]= useState(null)
  useEffect(() => {
    const getRSSData = async () => {
      try {
        const rssItems = await fetchRSS(); // Fetch RSS feed items
        console.log(rssItems);

        if (rssItems.length > 0) {
          const firstItemMedia = rssItems[1].imageURL;
          setHeadline(rssItems[1].title);
          settitle(rssItems[0].title);

          if (firstItemMedia) {
            setImage(firstItemMedia); // Set the first item's image URL in the state
          }
        }
      } catch (error) {
        console.error("Error fetching RSS data", error);
      }
    };

    getRSSData();
  }, []);
  return (
    <div className="flex-col gap-[10px] items-start">
      <div className="flex items-center gap-[20px]">
        <p className="font-roboto ml-[4%] font-bold min-[540px]:text-[13px] text-white bg-black px-[6px] py-[4px] ">
          Trending now
        </p>
        <p className="font-montserrat text-[12px] min-[540px]:text-[14px]">{title}</p>
      </div>
      <div className=" mt-[20px] flex gap-[30px] h-[550px]">
        <img 
        className="w-full h-full object-cover object-top"
        src={Image} alt="todays pick image" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-white font-montserrat font-bold min-200:w-[300px] min-[700px]:w-[500px] min-[700px]:pl-[45px] text-[17px] min-[1000px]:text-[26px] bg-black bg-opacity-50 py-[10px] rounded-md">
      <p>{Headline}</p>
      <div className="flex bg-white w-[155px]">
      <p className="text-black px-[4px]">Read More</p>
    </div>
    </div>
    
  </div>
    </div>
  );
}

export default DesktopNews;
