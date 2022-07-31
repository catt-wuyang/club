import { useState, useEffect, useCallback } from "react";

export const useHash = () => {
  const [hash, setHash] = useState(() => window.location.hash);

  const onHashChange = useCallback(() => {
    setHash(window.location.hash);
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const _setHash = useCallback((newHash) => {
    if (newHash !== hash) {
      window.location.hash = newHash;
    }
  });

  return [hash, _setHash];
};
