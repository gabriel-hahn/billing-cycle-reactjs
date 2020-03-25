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
  transition: all 0.5s;

  &:hover {
    background: #273D44;
  }

  & > a {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: #FFF;

    p {
      font-size: 1.2em;
      margin-right: 35px;
    }

    svg {
      font-size: 1.5em;
      margin-left: 15px;
    }
  }
`;

export const Logout = styled.button`
  background: #2F4B53;
  color: #FFF;
  border: 1px solid #263D44;
  height: 5.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s;

  &:hover {
    background: #273D44;
  }

  p {
    font-size: 1.9em;
    margin-right: 35px;
  }

  svg {
    font-size: 2.5em;
    margin-left: 15px;
  }
`;

PagesList.displayName = 'PagesList';
Logout.displayName = 'Logout';
