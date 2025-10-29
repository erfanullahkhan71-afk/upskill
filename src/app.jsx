
import Nave from "./component/nav/Nave";
import Herosection from "./component/Hero/Herosection";
import Lern3 from "./component/Lern3/Lern3";
import WeBring4 from "./component/WeBraing4/WeBring4";
import Down from "./component/whatOurStudetsSay/down";
import Footer from "./component/footer/Footer";
import Courses from "./component/cardes/Courses";
import Studentsay from "./component/whatOurStudetsSay/Studentsay";

function app() {
  return (
    <>
      <Nave />
      <Herosection />
      <Courses/>
      <Lern3 />
      <WeBring4/>
<Studentsay/>
      <Down/>
      <Footer/>
    </>
  );
}

export default app;
