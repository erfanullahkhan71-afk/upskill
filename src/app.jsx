import Nave from "./component/nav/Nave";
import Herosection from "./component/Hero/Herosection";
import Lern3 from "./component/Lern3/Lern3";


import Footer from "./component/footer/Footer";
import Courses from "./component/cardes/Courses";
import Studentsay from "./component/whatOurStudetsSay/Studentsay";

function app() {
  return (
    <>
      <Nave />
      <Herosection />
      <Courses />
      <Lern3 />
  <Studentsay/>
  
      <Footer />
    </>
  );
}

export default app;
