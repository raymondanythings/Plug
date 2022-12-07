import { useEffect } from "react";
import tauriStore from "store";
function useTauri() {
  const { invoke, invokeInitialize, isMounted } = tauriStore();
  const isClient = typeof window !== "undefined";
  useEffect(() => {
    if (isClient) {
      invokeInitialize();
    }
  }, [isClient, invokeInitialize]);
  return {
    invoke,
    isMounted,
  };
}

export default useTauri;
