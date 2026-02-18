import React from 'react'

export const ContactModalMessage = ({ isLoading, isSuccess, isOpen }) => {
  if (!isOpen) {
    return <>&nbsp;</>
  }
  if (isLoading) {
    return <>You message is being submitted. Please wait ...</>
  }
  if (isSuccess) {
    return (
      <>
        You message has been successfully submitted. I will respond you within 2
        days, if there&#39;s anything important you can send me a DM on{' '}
        <a
          href="http://twitter.com/varundevpro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline hover:no-underline"
        >
          Twitter
        </a>
        .
      </>
    )
  }
  return (
    <>
      We&#39;ve encountered an issue while submitting your message. Please reach
      out to me via{' '}
      <a
        href="http://twitter.com/varundevpro"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 underline hover:no-underline"
      >
        Twitter
      </a>
      .
    </>
  )
}
