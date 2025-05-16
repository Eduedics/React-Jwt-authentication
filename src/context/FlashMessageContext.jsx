import React, { createContext, useState } from 'react'

const FlashMessageContext = createContext()

export const FlashMessageProvider = ({ children }) => {
  const [message, setMessage] = useState(null)

  const showMessage = (msg, type = 'info') => {
    setMessage({ text: msg, type })

    // message gets hidden after every 3 s frrom pop up
    setTimeout(() => {
      setMessage(null)
    }, 3000)
  }

  return (
    <FlashMessageContext.Provider value={{ message, showMessage }}>
      {children}
    </FlashMessageContext.Provider>
  )
}

export default FlashMessageContext
