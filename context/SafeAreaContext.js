import React from "react";

export const SafeAreaContext = React.createContext({
  showSafeArea: false,
  toggleShowSafeArea: () => {},
});
