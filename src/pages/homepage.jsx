import DesktopNews from "../component/desktopnew";
import Header from "../component/header";
import Navigation from "../component/navigation";
import NewsList from "../component/newslist";
import { FooterWithSitemap } from "../component/footer";

function HomePage() {
  return (
    <>
      <Header />
      <Navigation />
      <DesktopNews />
      <NewsList />
      <FooterWithSitemap />
    </>
  );
}

export default HomePage;