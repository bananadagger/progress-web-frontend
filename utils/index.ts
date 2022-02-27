import { Data } from '../data';

export function calculatePercent(done: number, total: number) {
  const percent = (done / total) * 100;
  return parseInt(percent.toFixed(0));
}

export function advanceCountAllTask(listItem: Data[]): {
  doneCount: number;
  allCount: number;
} {
  return listItem.reduce(
    (acc, item) => {
      const { children, done } = item;

      if (children) {
        const childResult = advanceCountAllTask(children);
        return {
          doneCount: acc.doneCount + childResult.doneCount,
          allCount: acc.allCount + childResult.allCount,
        };
      }

      return {
        doneCount: done ? acc.doneCount + 1 : acc.doneCount,
        allCount: acc.allCount + 1,
      };
    },
    { doneCount: 0, allCount: 0 }
  );
}

export function getChildrenInfo(listItem?: Data[]) {
  const childrenTaskInfo = listItem
    ? advanceCountAllTask(listItem)
    : { doneCount: 0, allCount: 0 };

  return childrenTaskInfo;
}
