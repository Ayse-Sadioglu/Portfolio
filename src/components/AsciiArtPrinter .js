import React from 'react';

const AsciiArtPrinter = ({ art, color }) => {
  const style = {
    color: color || 'inherit', 
};

  return (
    <pre style={style}>
      {art}
    </pre>
  );
};

export default AsciiArtPrinter;
