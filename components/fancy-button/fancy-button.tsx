import { useState } from 'react';
import { Button, Avatar } from 'antd';
import styles from './fancy-button.module.css';

export function FantacyButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={styles.fancyButtonContainer}>
      {isClicked ? (
        <Avatar
          className={styles.doge}
          size={200}
          shape="square"
          src="/doge-meme.gif"
        />
      ) : (
        <Button type="primary" danger onClick={() => setIsClicked(true)}>
          DO NOT CLICK
        </Button>
      )}
    </div>
  );
}
