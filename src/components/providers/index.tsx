import Header from "../features/header/Header";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="container mx-auto">
      <Header />
      {children}
    </div>
  );
};

export default Providers;
