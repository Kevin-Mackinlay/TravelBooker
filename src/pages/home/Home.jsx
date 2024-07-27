import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Search by Property Category</h1>
        <PropertyList />
        <h1 className="homeTitle">Popular Choices</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
}

export default Home