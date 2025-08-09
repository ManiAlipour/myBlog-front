import { useLocale } from "next-intl";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  color?: "blue" | "dark" | "light";
  className?: string;
  type?: "submit" | "reset" | "button";
}

const Button = ({
  children,
  className = "",
  color = "blue",
  type = "button",
  ...props
}: IButtonProps) => {
  const locale = useLocale();
  const en = locale === "en";

  return (
  <button
      type={type}
      className={`minw-[212px] min-h-[56px] px-8 py-4 text-base rounded-4xl bg-${color} ${className} ${
        color === "dark" && "border border-white"
      } ${en ? "font-ubuntu" : "font-vazir"}`}
    >
      <span
        className={`flex font-ubuntu items-center gap-3 justify-center ${
          color === "blue" || color === "light" ? "text-black" : "text-white"
        }`}
        {...props}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
