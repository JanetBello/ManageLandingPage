const Value = (props) => {
  return (
    <div>
      {props.values.map((value) => (
        <section className="">
          <div className=" bg-red-200 rounded-l-3xl relative py-2  md:bg-transparent">
            <div className=" p-2 absolute top-0 left-0 px-6 text-slate-50 font-bold bg-orange-600 rounded-3xl shadow-lg inline">
              {value.number}
            </div>
            <h2 className="font-bold ml-16">{value.title}</h2>
          </div>

          <p className=" text-slate-400">{value.content}</p>
        </section>
      ))}
    </div>
  );
};

export default Value;
