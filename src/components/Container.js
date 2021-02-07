import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.4rem;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    /* max-width: ${({ theme }) => theme.maxContainerWidth}; */
    padding: 0 3rem;
  }
`;

export default Container;
