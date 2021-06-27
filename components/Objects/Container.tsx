import React from 'react';

const Container = (props: any) => {
  return (
    <div className={`o-container ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
};

export default Container;