// useLocalStorage.js
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    return typeof initialValue === "function" ? initialValue() : initialValue;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const newValue = localStorage.getItem(key);
      setValue(newValue !== null ? JSON.parse(newValue) : initialValue);
    };

    // Custom event to trigger updates within the app
    window.addEventListener("local-storage", handleStorageChange);

    return () => {
      window.removeEventListener("local-storage", handleStorageChange);
    };
  }, [key, initialValue]);

  const setLocalStorage = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
    // Dispatch a custom event whenever local storage is updated
    window.dispatchEvent(new Event("local-storage"));
  };

  return [value, setLocalStorage];
}

export default useLocalStorage;
