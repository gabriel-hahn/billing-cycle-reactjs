import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 200px;
  background: #2F4B53;
  color: #FFF;
`;

export const PagesList = styled.ul`

`;

export const Page = styled.li`
  height: 4em;
  border: 1px solid #263D44;

  & > a {
    text-decoration: none;
    color: #FFF;
  }
`;

export const Logout = styled.button`
  background: #2F4B53;
  color: #FFF;
  border: 1px solid #263D44;
  height: 4em;
`;
