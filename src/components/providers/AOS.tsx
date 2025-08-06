import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AOSProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return <>{children}</>;
}
