import { useOutletContext } from "react-router-dom";
import React, { useEffect } from "react";

export const useTitle = (title) => {
  const { setTitle } = useOutletContext();

  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);
};
