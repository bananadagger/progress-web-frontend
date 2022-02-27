import { setAllDone } from "../utils";

const containerSubFolders = [
  "checkbox",
  "date",
  "date-picker",
  "file",
  "loss-type",
  "number",
  "role",
  "select",
  "switch-active-status",
  "telephone",
  "text",
];

export const container = {
  title: "container",
  children: setAllDone(containerSubFolders),
};
