import { Checkbox } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import styles from './task.module.css';

type Props = {
  name: string;
  done?: boolean;
};

export const Task = ({ name, done }: Props) => (
  <div>
    {done ? (
      <>
        <CheckCircleTwoTone twoToneColor="#52c41a" />
        <span className={styles.doneTaskText}>{` ${name}`}</span>
      </>
    ) : (
      <Checkbox checked={false}>{name}</Checkbox>
    )}
  </div>
);
