import React, { createContext, useContext } from 'react'

const VoiceContext = createContext();

export const VoiceProvider = ({children}) => {
  return (
    <VoiceContext.Provider>
        {children}
    </VoiceContext.Provider>
  )
}

const useVoiceContext = () => useContext(VoiceContext);

export default useVoiceContext;       