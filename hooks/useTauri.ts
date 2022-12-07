import { useEffect } from "react";
import tauriStore from "store";
function useTauri() {
  const { invoke, invokeInitialize } = tauriStore();
  const isClient = typeof window !== "undefined";
  useEffect(() => {
    if (isClient) {
      invokeInitialize();
    }
  }, [isClient]);
  return {
    invoke,
  };
}

export default useTauri;
