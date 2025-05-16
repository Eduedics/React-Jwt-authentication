import React, { useContext } from 'react'
import FlashMessageContext from '../context/FlashMessageContext'

const FlashMessage = () => {
  const { message } = useContext(FlashMessageContext)

  if (!message) return null

  const styles = {
    padding: '10px',
    margin: '10px',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor:
      message.type === 'success'
        ? 'green'
        : message.type === 'error'
        ? 'red'
        : 'blue',
  }

  return <div style={styles}>{message.text}</div>
}

export default FlashMessage