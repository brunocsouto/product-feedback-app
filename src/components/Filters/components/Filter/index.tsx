import { useState } from "react";
import classnames from "classnames";

interface Props {
  title: string;
}

const baseClassname = "px-4 py-[6px] text-p3 rounded-[10px]";

const variants = {
  default: "bg-pf-5 text-pf-2 hover:bg-[#CFD7FF]",
  active: "bg-pf-2 text-pf-5",
};

const Filter = ({ title }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const variantClassname = isActive ? variants.active : variants.default;

  const handleButtonClick = () => {
    if(isActive) return
    setIsActive(true)
  }

  return (
    <button
      className={classnames(baseClassname, variantClassname)}
      onClick={handleButtonClick}
    >
      {title}
    </button>
  );
};

export default Filter;
