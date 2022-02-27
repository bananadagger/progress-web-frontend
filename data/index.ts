import { reactObject } from "./react/index";
import { cypressObject } from "./cypress";
import { mockBackendObject } from "./mock-backend";

export type Data = {
  title: string;
  done?: boolean;
  children?: Data[];
};

export const data: Data[] = [reactObject, cypressObject, mockBackendObject];
