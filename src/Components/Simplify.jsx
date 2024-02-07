import Buttons from "../button";

const Simplify = () => {
  return (
    <div className=" py-16 flex justify-center flex-col text-orange-600 bg-orange-600 md:flex-row md:px-32 ">
      <div className=" md:mr-auto md:w-96">
        <h4 className=" text-4xl font-bold text-slate-50">
          Simplify how your team works today
        </h4>
      </div>
      <div className=" mt-4 md:ml-auto">
        <button className="p-2 px-6 rounded-3xl bg-slate-50">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Simplify;
