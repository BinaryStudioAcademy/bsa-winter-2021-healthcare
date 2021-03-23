type callbackType = () => void;
const DEFAULT_DELAY_TIME = 500;

const useDebounce = (callback: callbackType, delay = DEFAULT_DELAY_TIME): callbackType => {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
};

export { useDebounce };
