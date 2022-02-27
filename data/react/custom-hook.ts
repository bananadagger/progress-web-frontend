import { setAllDone } from "../utils";

const customHookSubFolders = ["api", "use-update-effect"];

export const customHook = {
  title: "customHook",
  children: setAllDone(customHookSubFolders),
};
