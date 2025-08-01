interface IButtonProps {
  children: React.ReactNode;
  color?: "blue" | "dark" | "light";
  className?: string;
}

const Button = ({ children, className = "", color = "blue" }: IButtonProps) => {
  return (
    <button
      className={`minw-[212px] min-h-[56px] px-8 py-4 text-base rounded-4xl bg-${color} ${className} ${
        color === "dark" && "border border-white"
      }`}
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
