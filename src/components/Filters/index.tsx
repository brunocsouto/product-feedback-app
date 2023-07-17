import Filter from "./components/Filter";

const mock = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

const Filters = () => {
  return (
    <div className="rounded-[10px] w-[255px] p-6 bg-pf-4">
      <div className="flex flex-wrap gap-x-2 gap-y-[14px]">
        {mock.map(item => (
          <Filter title={item} key={item} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
