import { Progress, Typography } from 'antd';
import { calculatePercent } from '../../utils';
import styles from './progress-info.module.css';

type Props = {
  name: string;
  doneCount: number;
  totalCount: number;
};

export function ProgressInfo({ name, doneCount, totalCount }: Props) {
  const percent = calculatePercent(doneCount, totalCount);
  return (
    <div className={styles.progressInfoContainer}>
      <Typography.Text strong>
        {`${name} (${doneCount}/${totalCount})`}
      </Typography.Text>
      <Progress className={styles.overAllProgressBar} percent={percent} />
    </div>
  );
}
