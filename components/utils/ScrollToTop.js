import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

import { classNames } from './classNames';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-20 mx-3 my-2">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          `bg-white hover:bg-white focus:bg-white inline-flex items-center rounded-full 
            p-2  text-Primary shadow-sm transition-opacity focus:outline-none 
            focus:ring-2 focus:ring-offset-2 animate-bounce`
        )}
      >
        <BiArrowFromBottom
          className="h-5 w-5 fill-blue-800"
          aria-hidden="true"
        ></BiArrowFromBottom>
      </button>
    </div>
  );
};
