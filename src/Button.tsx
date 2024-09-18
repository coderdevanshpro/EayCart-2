import { ButtonHTMLAttributes, FC } from "react";


type Buttonprops = {
 theme?:"primary" | "secondary",
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Buttonprops> = ({theme,...rest}) => {
    let themeClass=" bg-indigo-700 text-white";
    if(theme=='secondary')
    {
        themeClass=" bg-white text-indigo-700";
    }
  return (
    <>
      <button {...rest} className={"px-2 py-1 text-2xl border rounded-md"+themeClass}></button>
    </>
  );
};

export default Button;
