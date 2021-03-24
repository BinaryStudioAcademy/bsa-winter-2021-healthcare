type debounceCallbackType = <T>(...args: T[]) => void;

const debounce = (fn: debounceCallbackType, delay: number): debounceCallbackType => {
  let timeout: ReturnType<typeof setTimeout>;
  return <T>(...args: T[]): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.call(null, ...args), delay);
  };
};
export { debounce };
