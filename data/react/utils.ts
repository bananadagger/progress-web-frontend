import { setAllDone } from "../utils";

const utilsFolders = [
  "date",
  "file",
  "number-format",
  "number-operation",
  "permission",
  "purchasing",
  "utils",
  "warehouse",
];

export const utils = {
  title: "utils",
  children: setAllDone(utilsFolders),
};
