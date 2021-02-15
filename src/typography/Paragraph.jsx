import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: 16px;
    line-height: 1.2;
    max-width: 23rem;
    @media (${({ theme }) => theme.respondTo.tablet}) {
        font-size: 2rem;
        max-width: 30.5rem;
    }
`;

export default Paragraph;