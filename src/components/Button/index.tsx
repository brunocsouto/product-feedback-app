import classnames from "classnames";

interface Props {
  children: string | JSX.Element | JSX.Element[];
  variant?: "purple" | "blue" | "dark" | "red" | "";
  size?: "normal" | "full";
  onClick(): any;
}

const baseClassname =
  "px-4 md:px-6 py-[10.5px] md:py-3 text-pf-5 text-[.8125rem] md:text-[.875rem] font-bold rounded-[10.5px] hover:opacity-90";

const variants = {
  purple: "bg-pf-1",
  blue: "bg-pf-2",
  dark: "bg-pf-7",
  red: "bg-pf-11",
};

const sizes = {
  normal: "w-auto",
  full: "w-full",
};

const Button = (props: Props) => {
  const { variant, size, onClick, children } = props;

  const variantClassname = variant ? variants[variant] : variants["purple"];
  const sizeClassname = size ? sizes[size] : sizes["normal"];

  return (
    <button
      className={classnames(baseClassname, variantClassname, sizeClassname)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
