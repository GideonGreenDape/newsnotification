import DesktopNews from "./component/desktopnew";
import Header from "./component/header";
import Navigation from "./component/navigation";
import NewsList from "./component/newslist";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <DesktopNews />
      <NewsList />
    </>
  );
}

export default App;
