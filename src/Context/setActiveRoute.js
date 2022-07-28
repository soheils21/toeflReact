import { useOutletContext } from "react-router-dom";
import React, { useEffect } from "react";

export const SetActiveRoute = (route) => {
  const { setRoute } = useOutletContext();

  useEffect(() => {
    setRoute(route);
  }, [setRoute, route]);
};
