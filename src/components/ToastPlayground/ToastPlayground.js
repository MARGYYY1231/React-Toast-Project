import React from 'react';

import Button from '../Button';

import { ToastContext } from '../ToastProvider/ToastProvider';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { createToast } = React.useContext(ToastContext);
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);


function handleCreateToast(event){
  event.preventDefault();
  createToast(message, variant);

  setMessage('');
  setVariant(VARIANT_OPTIONS);
}

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

    <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handleCreateToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
            id="message" 
            className={styles.messageInput}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }} 
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >

            {/* TODO Other Variant radio buttons here */}
            {VARIANT_OPTIONS.map((v) => {
              const id = `variant-${v}`;

              return(
              <label htmlFor={id} key={id}>
              <input
                id={id}
                type="radio"
                name="variant"
                value={v}
                checked={v === variant}
                onChange={(event) => {
                  setVariant(event.target.value);
                }}
              />
              {v}
            </label>);
})}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>
              Pop Toast!
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
