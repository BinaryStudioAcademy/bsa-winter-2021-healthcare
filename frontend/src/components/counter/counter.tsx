import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { RootState } from 'common/types';
import { CounterActionCreator } from 'store/slices';
import styles from './styles.module.scss';

const Counter: React.FC = () => {
  const { count } = useSelector(({ counter }: RootState) => ({
    count: counter.value,
  }));
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = React.useState<string>('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(CounterActionCreator.increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(CounterActionCreator.decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(
              CounterActionCreator.incrementByAmount(
                Number(incrementAmount) ?? 0,
              ),
            )
          }
        >
          Add Amount
        </button>
        <button
          className={clsx(styles.asyncButton, styles.button)}
          onClick={() =>
            dispatch(
              CounterActionCreator.incrementAsync(Number(incrementAmount) ?? 0),
            )
          }
        >
          Add Async
        </button>
      </div>
    </div>
  );
};

export default Counter;
