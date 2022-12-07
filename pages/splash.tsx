import useTauri from "hooks/useTauri";
import { useEffect } from "react";

const Splash = () => {
  const { invoke } = useTauri();
  useEffect(() => {
    if (invoke) {
      setTimeout(() => {
        invoke("close_splashscreen")
          .then(() => console.log("????"))
          .catch(() => console.log("ERROR"));
      }, 5000);
    }
    console.log("==========================ok");
  }, [invoke]);
  console.log(invoke);
  return <>Splash</>;
};

export default Splash;
