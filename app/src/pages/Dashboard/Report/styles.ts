import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.25em;
  max-width: 90vw;
  flex: 1;
  display: inline-block;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin: 2em 0;
  height: 300px;

  & > :last-child {
    margin-left: 2em;
  }
`;
