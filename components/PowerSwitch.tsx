import React, { useState } from "react";
import styles from "./powerSwitch.module.css";

const PowerSwitch: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  function handleSwitchChange(): void {
    setIsChecked(!isChecked);
  }

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id="power"
        name="power"
        checked={isChecked}
        onChange={handleSwitchChange}
      />
      <label htmlFor="power" className={styles.power}>
        <span className={styles.iconOff}></span>
        <span className={styles.light}></span>
      </label>
    </div>
  );
};

export default PowerSwitch;
