import TitleBorderBottom from "./TitleWithBBorder";

const Title = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="mx-auto flex flex-col">
      <span className="text-6xl lg:text-5xl text-brand1 self-center">
        {title}
      </span>

      <span className="w-1/3 mx-auto">
        <TitleBorderBottom />
      </span>

      <p className="font-IBM px-0.5 text-center font-extralight">{description}</p>
    </div>
  );
};

export default Title;
