import notification from "../assets/icons/notification.svg";

const today = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOfWeek = daysOfWeek[today.getDay()];
const dayOfMonth = today.getDate();
const month = today.getMonth();
const monthAbbreviations = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const year = today.getFullYear();

function Navigation() {
  return (
    <nav className="hidden min-[545px]:flex  mt-[13px] pb-[13px] drop-shadow-md border-b  items-center justify-between  mx-[55px]">
      <TodaysDate />
      <Sections />
      <div className="flex-col pt-[10px] items-center bg-darkgreen flex items-center w-[105px]  h-[39px]">
        <p className="font-montserrat font-regular text-[12px] text-white ">
          US Today
        </p>
      </div>
    </nav>
  );
}

function TodaysDate() {
  return (
    <div className="flex flex-col gap-[2px] ">
      <p className="font-montserrat text-[12px] font-bold">{dayOfWeek}</p>
      <p className="font-montserrat font-medium text-[11px]">
        {dayOfMonth} {monthAbbreviations[month + 1]}
        {","}
        {year}
      </p>
    </div>
  );
}

function Sections() {
  return (
    <ul className="flex gap-[20px] font-montserrat font-medium text-[13px] ">
      <a href="#">
        <li className="font-bold">News</li>
      </a>
      <a href="#">
        <li>Politics</li>
      </a>
      {/* <a href="#">
        <li>Business</li>
      </a> */}
      <a className="min-[50px]:hidden min-[700px]:block " href="#">
        <li>Economic</li>
      </a>
      <a className="min-[50px]:hidden min-[700px]:block " href="#">
        <li>Election</li>
      </a>
      <a className="min-[50px]:hidden min-[700px]:block " href="#">
        <li>Science</li>
      </a>
      <a className="hidden min-[1100px]:block" href="#">
        <li>Technology</li>
      </a>
      <a className="hidden min-[1100px]:block" href="#">
        <li>War</li>
      </a>
      <a className="hidden min-[1100px]:block" href="#">
        <li>Health</li>
      </a>
      <a className="hidden min-[1100px]:block" href="#">
        <li>Sports</li>
      </a>
      <a className="hidden min-[1100px]:block" href="#">
        <li>Travel</li>
      </a>
      <a className="hidden min-[1100px]:block" href="#">
        <li>World News</li>
      </a>
    </ul>
  );
}

export default Navigation;
