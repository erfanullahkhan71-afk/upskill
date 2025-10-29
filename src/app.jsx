import React from "react";
import Nave from "./component/nav/Nave";
import Herosection from "./component/Hero/Herosection";
import CardeSecond from "./component/carde2/cardeSecond";
import Lern3 from "./component/Lern3/Lern3";
import WeBring4 from "./component/WeBraing4/WeBring4";
import WhatOurStudetsSay5 from "./component/whatOurStudetsSay/WhatOurStudetsSay5";
import Down from "./component/whatOurStudetsSay/down";
import Footer from "./component/footer/Footer";

function app() {
  return (
    <>
      <Nave />
      <Herosection />
      <CardeSecond />
      <Lern3 />
      <WeBring4/>
      <WhatOurStudetsSay5/>
      <Down/>
      <Footer/>
    </>
  );
}

export default app;
