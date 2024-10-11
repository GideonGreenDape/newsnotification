import Header from "../component/header";
import Navigation from "../component/navigation";
import { FooterWithSitemap } from "../component/footer";
import NewsTemplate from "../component/dailynewstemplate";

function LatestNews() {
  return (
    <>
      <Header />
      <Navigation />
      <NewsTemplate />
      <FooterWithSitemap />
    </>
  );
}

export default LatestNews;
