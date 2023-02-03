import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import classes from './CodeSnippet.module.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Tooltip } from 'react-tooltip'
// Formatting
import prettier from 'prettier/standalone.js';
import parserJs from 'prettier/parser-flow.js';
import parserHtml from 'prettier/parser-markdown.js';
import parserCss from 'prettier/parser-postcss.js';
import {atomDark, darcula} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {oneDark, dracula, okaidia} from "react-syntax-highlighter/dist/cjs/styles/prism";
import parserTs from 'prettier/parser-typescript'
import {nightOwl} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {tomorrowNightBlue} from "react-syntax-highlighter/dist/cjs/styles/hljs";


const CodeSnippet = ({ language = 'markup', children = '' }) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [toolTipText, setToolTipText] = useState('Kopier');

  if (language === 'css' || language === 'scss') {
    // eslint-disable-next-line import/no-named-as-default-member
    children = prettier.format(children, {
      parser: 'css',
      plugins: [parserCss],
    });
  }
  if (language === 'javascript') {
    // eslint-disable-next-line import/no-named-as-default-member
    children = prettier.format(children, {
      parser: 'flow',
      plugins: [parserJs],
        tabWidth: 2,
        semi: true
    });
  }
  if (language === 'markup') {
    // eslint-disable-next-line import/no-named-as-default-member
    children = prettier.format(children, {
      parser: 'markdown',
      plugins: [parserHtml],
    });
  }
    if (language === 'ts') {
        // eslint-disable-next-line import/no-named-as-default-member
        children = prettier.format(children, {
            parser: 'typescript',
            plugins: [parserTs],
        });
    }
  const onButtonClick = () => {
    setToolTipText('Kopiert!');
    navigator.clipboard.writeText(children);
  };

  return (
    <div className={classes['code-snippet']}>
        <Tooltip anchorId="tomato" content={toolTipText} place="top" />
      <button
          id='tomato'
        onClick={() => onButtonClick()}
        onMouseEnter={() => setToolTipText('Kopier')}
        className={classes['code-snippet__icon']}
      >
          <Copy size={20} />
      </button>
      <SyntaxHighlighter
          style={nightOwl}
        language='jsx'
        customStyle={{
          fontSize: '15px',
          margin: 0,
          padding: '18px'
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export { CodeSnippet };
