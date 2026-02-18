import React from 'react'

export const ContactModalTitle = ({ isLoading, isSuccess, isOpen }) => {
  if (!isOpen) {
    return <>&nbsp;</>
  }
  if (isLoading) {
    return <>Submitting Message</>
  }
  if (isSuccess) {
    return <>Message Sent!</>
  }
  return <>Submission Failed!</>
}
