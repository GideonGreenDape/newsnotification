import bar from "../assets/icons/bar.svg";
import fetchRSS from "../utility/nytimes";
import fetchFoxNews from "../utility/foxnews";
import fire from "../assets/icons/fire.svg"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewsList() {
  return (
    <div className="flex min-[200px]:flex-col min-[1200px]:flex-row justify-between mx-[45px] mt-[42px] ">
      <LatestNew />
      <NewHeadline />
    </div>
  );
}

function NewHeadline() {
  return(
    <div className="flex-col mt-[65px] h-fit pb-[45px] gap-[20px] items-start rounded-lg bg-offwhite w-[500px] px-[3%] ">
      <div className="flex gap-[10px] items-start mt-[40px] ">
      <p className="font-montserrat text-darkgreen font-bold text-[17px]">Just Updated</p>
      <img className="w-[22px] h-[22px] " src={fire} alt="trending fire icon" />
    </div>
    <FoxNewsUpdated />
    </div>
  )
}

function FoxNewsUpdated() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const getRSSData = async () => {
      try {
        const rssItems = await fetchFoxNews();
        console.log(rssItems);
        
        if (rssItems.length > 0) {
          setData(rssItems);
        }
      } catch (error) {
        console.error("Error fetching RSS data", error);
      }
    };
    getRSSData();
  }, []);

  return(
      Data.slice(0,13).map((items,index)=>{
        return(
         <Link to={`justupdatedNews/${index}`} >
          <div className="flex items-start gap-[15px] mt-[35px] ">
        <p className="font-montserrat font-bold text-[25px] text-darkgray ">#{index}</p>
        <div className="flex-col gap-[6px] items-start">
        <p className="font-montserrat font-bold text-[14px] w-[350px] ">{items.title}</p>
        <p className="font-montserrat font-medium text-[11px] mt-[10px] text-darkgreen ">{items.pubDate}</p>
        </div>
        </div>
         </Link>
        )
      })
  )
}

function LatestNew() {
  return (
    <div className="flex-col gap-[20px] items-start w-[600px]">
      <div className=" flex gap-[12px] items-center ">
        <img src={bar} alt="Line Icon" />
        <p className="font-montserrat font-bold text-[24px]"> The Latest</p>
      </div>
      <NewsCard />
    </div>
  );
}

function NewsCard() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const getRSSData = async () => {
      try {
        const rssItems = await fetchRSS();
        if (rssItems.length > 0) {
          setData(rssItems);
        }
      } catch (error) {
        console.error("Error fetching RSS data", error);
      }
    };
    getRSSData();
  }, []);
  return Data.slice(0, 7).map((items,index) => {
    const dateObj = new Date(items.pubDate);
    const dayOfWeek = dateObj.toLocaleString("en-Us", { weekday: "short" });
    const dayNumber = dateObj.getDate();
    
    return (
      <Link to={`latestnewshappening/${index}`}>
      <div className="flex items-start gap-[15px] mt-[35px] rounded-lg hover:bg-darkergray p-[2%] cursor-pointer " >
        {items.imageURL ? <img className="w-[200px] h-[155px] rounded-md " src={items.imageURL} alt="Topic Description" />: <div className="w-[400px] h-[170px] rounded-md bg-gray "> </div> }
        <div className="flex-col items-start gap-[8px] ">
          <div className="flex gap-[10px] items-center mb-[10px] ">
            <p className="font-montserrat font-bold border border-gray p-[4px] text-[11px] ">
              newswebsite
            </p>
            <p className="font-montserrat text-darkgray font-medium text-[11px]">
              {dayOfWeek} {dayNumber}
            </p>
          </div>
          <div className="flex-col gap-[5px] mb-[10px] ">
            <p className="font-montserrat font-bold text-[16px]">
              {items.title}
            </p>
            <p className="font-montserrat font-regular text-[13px] mt-[5px] ">
              {items.description}
            </p>
          </div>
          <p className="font-montserrat font-medium underline text-darkgreen font-regular text-[12px]">
            Continue Reading
          </p>
        </div>
      </div>
      </Link>
    );
  });
}

export default NewsList;
