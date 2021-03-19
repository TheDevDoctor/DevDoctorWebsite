// ./CodeBlock.js
import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

const CodeBlock = ({ language, value }) => {

  console.log(language)
  console.log(value)

  return (
      <SyntaxHighlighter language={language} style={tomorrow}>
        {value}
      </SyntaxHighlighter>
  )
}

export default CodeBlock