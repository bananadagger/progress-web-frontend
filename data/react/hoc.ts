import { setAllDone } from "../utils";

const hocSubFolders = ["to-icon-with-menu", "with-router-prompt"];

export const hoc = {
  title: "hoc",
  children: setAllDone(hocSubFolders),
};
