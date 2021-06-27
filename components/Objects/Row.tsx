import React from 'react';

const Row = (props: any) => {
  return (
    <div className={`o-row ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
};

export default Row;