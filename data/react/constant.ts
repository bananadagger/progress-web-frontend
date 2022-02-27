import { setAllDone } from "../utils";

const constantSubFolders = [
  "api",
  "group-name",
  "permission",
  "purchasing",
  "sales",
  "warehouse",
];

export const constant = {
  title: "constant",
  children: setAllDone(constantSubFolders),
};
