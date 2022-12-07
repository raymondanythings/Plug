import create from "zustand";
interface InvokeArgs {
  [key: string]: unknown;
}
type invokeType<T extends any> = (cmd: string, args?: InvokeArgs) => Promise<T>;

interface TauriWindow<T = void> {
  invoke: invokeType<T> | null;
  invokeInitialize: () => Promise<void>;
  isMounted: boolean;
  isError: boolean;
}

const tauriStore = create<TauriWindow>((set) => ({
  invoke: null,
  isMounted: false,
  isError: false,
  invokeInitialize: async () => {
    try {
      const { invoke } = await import("@tauri-apps/api");
      set(() => ({ invoke, isMounted: true, isError: false }));
    } catch (err) {
      set(() => ({ invoke: null, isMounted: false, isError: true }));
    }
  },
}));

export default tauriStore;
