import { invoke } from "@tauri-apps/api";
import create from "zustand";
interface InvokeArgs {
  [key: string]: unknown;
}
type invokeType<T extends any> = (cmd: string, args?: InvokeArgs) => Promise<T>;

interface TauriWindow<T = void> {
  invoke: invokeType<T> | null;
  invokeInitialize: () => Promise<void>;
}

const tauriStore = create<TauriWindow>((set) => ({
  invoke: null,
  invokeInitialize: async () => {
    const { invoke } = await import("@tauri-apps/api");
    set(() => ({ invoke }));
  },
}));

export default tauriStore;
