import useTauri from "hooks/useTauri";
import { useEffect } from "react";

const Splash = () => {
  const { invoke } = useTauri();
  useEffect(() => {
    if (invoke) {
      setTimeout(() => {
        invoke("close_splashscreen");
      }, 5000);
    }
  }, [invoke]);
  return <>Splash</>;
};

export default Splash;
