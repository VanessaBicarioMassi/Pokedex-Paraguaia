import styled from 'styled-components';

export const NavBar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #ffcc00;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavItem = styled.a`
    margin: 0 15px;
    text-decoration: none;
    color: #333;
    font-weight: bold;

    &:hover {
        color: #ff6600;
    }
`;
