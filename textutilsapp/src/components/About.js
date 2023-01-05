import React from 'react'

export default function About(props) {
  return (

    <div className='container' style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
      <h1 className='mb-4'> {props.heading} </h1>
      <div className='mb-3'>
        <p>TextUtils Tools are a powerful suite of browser-based text manipulation tools to easily perform specialized text manipulation
          tasks that are impossible using traditional text editors. Textutils gives you a way to analyze your text quickly and efficiently.
          You can perform the following text manipulation such as convert text from uppercase to lowercase and lowercase to uppercase, remove extra
          space, and copy manipulated text in your clipboard.
        </p>

        <p>
          TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
        </p>
        
        <p>
          This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc
        </p>
      </div>
    </div>

  )
}
