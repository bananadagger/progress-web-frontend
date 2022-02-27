import { setAllDone } from "../utils";

const contextProviderSubFolders = [
  "api",
  "app",
  "form",
  "user",
  "user-permission",
];

export const contextProvider = {
  title: "contextProvider",
  children: setAllDone(contextProviderSubFolders),
};
