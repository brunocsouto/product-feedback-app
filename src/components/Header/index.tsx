import BgImage from "@assets/images/background-header.png";

const Header = () => {
  return (
    <div className="relative rounded-[10px] w-[255px] h-[137px] lg:h-[180px] overflow-hidden p-6 flex items-end">
      <div className=" text-pf-4 relative z-[1] flex flex-col">
        <h1 className="text-h2 tracking-tight">Frontend Mentor</h1>
        <p className="opacity-75">dsadads</p>
      </div>
      <div className="absolute top-0 left-0 w-[255px] h-[137px] lg:h-[180px] z-0">
        <img src={BgImage} className="h-[137px] lg:h-[180px]" />
      </div>
    </div>
  );
};

export default Header;
