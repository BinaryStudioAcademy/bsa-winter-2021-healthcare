import * as React from 'react';

type VisibleHookType = {
  ref: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const useVisible = (isInitialIsVisible: boolean): VisibleHookType => {
  const [isVisible, setIsVisible] = React.useState<boolean>(isInitialIsVisible);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    if (ref.current && !ref.current.contains(element)) {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
};

export { useVisible };
