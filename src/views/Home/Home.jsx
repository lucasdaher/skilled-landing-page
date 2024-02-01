import Courses from "../../components/Courses/Courses";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Presentation from "../../components/Presentation/Presentation";
import "./index.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <main>
        <Presentation />
        <Courses />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
