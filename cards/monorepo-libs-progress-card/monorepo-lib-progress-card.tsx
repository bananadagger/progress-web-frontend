import { useState, useEffect } from 'react';
import { Card, Collapse, Skeleton } from 'antd';
import { data, Data } from '../../data';
import styles from './monorepo-lib-progress-card.module.css';
import { getChildrenInfo, advanceCountAllTask } from '../../utils';
import { Task } from '../../components/task/task';
import { ProgressInfo } from '../../components/progress-info/progress-info';
import { FantacyButton } from '../../components/fancy-button/fancy-button';

const { Panel } = Collapse;

const renderChildren = (listItem?: Data[]) =>
  listItem &&
  listItem.map((item, i) => {
    const { title, children, done } = item;

    if (!children) {
      return <Task name={title} done={done} key={i} />;
    }

    const { doneCount, allCount } = getChildrenInfo(children);
    return (
      <Collapse ghost key={i}>
        <Panel
          header={
            <ProgressInfo
              name={title}
              doneCount={doneCount}
              totalCount={allCount}
            />
          }
          key={1}
        >
          {renderChildren(children)}
        </Panel>
      </Collapse>
    );
  });

function MonorepoLibProgressCard() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const overAllCount = advanceCountAllTask(data);

  return (
    <Card title="Monorepo Library Progress">
      {showContent ? (
        <>
          <FantacyButton />
          <ProgressInfo
            name="All progress"
            doneCount={overAllCount.doneCount}
            totalCount={overAllCount.allCount}
          />
          <Collapse className={styles.detail}>
            {data.map((d, i) => {
              const { title, children } = d;
              const { doneCount, allCount } = getChildrenInfo(children);
              return (
                <Panel
                  header={
                    <ProgressInfo
                      name={title}
                      doneCount={doneCount}
                      totalCount={allCount}
                    />
                  }
                  key={i}
                >
                  {renderChildren(children)}
                </Panel>
              );
            })}
          </Collapse>
        </>
      ) : (
        <Skeleton active />
      )}
    </Card>
  );
}

export default MonorepoLibProgressCard;
