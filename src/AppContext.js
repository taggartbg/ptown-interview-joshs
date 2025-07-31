import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({children}) => {
  const [feedBack, setFeedBack] = useState('');
  const [partyCount, setPartyCount] = useState(0);

  return <AppContext.Provider value = {{feedBack, setFeedBack, partyCount, setPartyCount}}>{children}</AppContext.Provider>

}