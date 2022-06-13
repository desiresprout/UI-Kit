import { useEffect, RefObject, useCallback } from 'react';

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: () => void,
  isRegister?: boolean
) => {
  const listener = useCallback(
    (event: Event) => {
      const element = ref.current;

      if (element && element.contains(event.target as HTMLElement)) {
        return;
      }
      handler();
    },
    [ref, handler]
  );

  useEffect(() => {
    if (!isRegister) {
      return;
    }

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);
};

export default useOnClickOutside;
