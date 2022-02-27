export const setAllDone = (folderNames: string[]) =>
  folderNames.map((name) => ({ title: name, done: true }));
