import { useEffect } from "react";

export const useOnUnmount = onUnmount =>
  useEffect(() => {
    return () => onUnmount && onUnmount();
  }, []);

export const useOnMount = onMount =>
  useEffect(() => {
    onMount && onMount();
  }, []);
