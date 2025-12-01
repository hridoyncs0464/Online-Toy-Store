import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    const prev = document.title;
    document.title = title;

    return () => {
      document.title = prev;   // optional cleanup
    };
  }, [title]);
};

export default useTitle;
