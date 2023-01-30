import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import classes from './CodeSnippet.module.css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import markup from 'react-syntax-highlighter/dist/cjs/languages/prism/markup';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import { Tooltip } from 'react-tippy';
SyntaxHighlighter.registerLanguage('markup', markup);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('javascript', javascript);
// Formatting
import prettier from 'prettier/standalone.js';
import parserJs from 'prettier/parser-flow.js';
import parserHtml from 'prettier/parser-html.js';
import parserCss from 'prettier/parser-postcss.js';

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
    });
  }
  if (language === 'markup') {
    // eslint-disable-next-line import/no-named-as-default-member
    children = prettier.format(children, {
      parser: 'html',
      plugins: [parserHtml],
    });
  }

  const onButtonClick = () => {
    setToolTipText('Kopiert!');
    navigator.clipboard.writeText(children);
    setTimeout(() => {
      setShowToolTip(false);
    }, 300);
    setTimeout(() => {
      setToolTipText('Kopier');
    }, 500);
  };

  // @ts-ignore
  return (
    <div className={classes['code-snippet']}>
      <button
        onClick={() => onButtonClick()}
        onMouseEnter={() => setShowToolTip(true)}
        onMouseLeave={() => setShowToolTip(false)}
        className={classes['code-snippet__icon']}
      >
        <Tooltip
          open={showToolTip}
          title={toolTipText}
          position='top'
          trigger='mouseenter'
          arrow={true}
          distance={22}
          hideOnClick={false}
        />

      </button>
      <SyntaxHighlighter
        language={language}
        style={prism}
        customStyle={{
          fontSize: '14px',
          margin: 0,
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export { CodeSnippet };
