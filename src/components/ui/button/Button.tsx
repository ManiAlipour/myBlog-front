import { useLocale } from "next-intl";

interface IButtonProps {
  children: React.ReactNode;
  color?: "blue" | "dark" | "light";
  className?: string;
  type: "submit" | "reset" | "button";
}

const Button = ({
  children,
  className = "",
  color = "blue",
  type = "button",
}: IButtonProps) => {
  const locale = useLocale();

  return (
    <button
      type={type}
      className={`minw-[212px] min-h-[56px] px-8 py-4 text-base rounded-4xl bg-${color} ${className} ${
        color === "dark" && "border border-white"
      } ${locale === "en" ? "font-ubuntu" : "font-vazir"}`}
    >
      <span
        className={`flex font-ubuntu items-center gap-3 justify-center ${
          color === "blue" || color === "light" ? "text-black" : "text-white"
        }`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
