import { api } from "./api";
import { card } from "./card";
import { component } from "./component";
import { constant } from "./constant";
import { container } from "./container";
import { contextProvider } from "./context-provider";
import { customHook } from "./custom-hook";
import { hoc } from "./hoc";
import { theme } from "./theme";
import { utils } from "./utils";
import { page } from "./page";

export const reactObject = {
  title: "React",
  children: [
    api,
    card,
    component,
    constant,
    container,
    contextProvider,
    customHook,
    hoc,
    theme,
    utils,
    page,
  ],
};
