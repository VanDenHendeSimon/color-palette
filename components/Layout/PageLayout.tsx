import React from 'react';
import Row from "../Objects/Row";
import Container from "../Objects/Container";

export const PageLayout = (props: any) => {
  return (
    <div>
      <Row>
        <Container>
          <div className="c-pagecontent">
            {props.children}
          </div>
        </Container>
      </Row>
    </div>
  );
};
