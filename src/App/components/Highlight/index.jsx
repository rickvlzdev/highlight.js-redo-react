import React from 'react';

export default function Highlight(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <pre>
      <code>
        {
`${children}`
        }
      </code>
    </pre>
  );
}
