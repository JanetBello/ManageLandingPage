import { useState } from "react";
import NavBar from "./Components/NavBar";
import Charts from "./Components/Charts";
import Management from "./Components/management";
import Difference from "./Components/difference";
import Simplify from "./Components/Simplify";
import Footer from "./Components/footer";
import Value from "./Components/Value";
import values from "./data/values";
import Testimonial from "./Components/Testimonial";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" p-4 pt-10 md:pt-10 md:p-32">
        <NavBar />
        <div className=" mt-10 flex justify-between flex-col md:flex-row-reverse">
          <Charts />
          <Management />
        </div>
        <div className=" flex flex-col gap-8 md:flex-row">
          <Difference />
          <Value values={values} />
        </div>

        <Testimonial />
      </div>

      <Simplify />
      <Footer />
    </>
  );
}

export default App;
