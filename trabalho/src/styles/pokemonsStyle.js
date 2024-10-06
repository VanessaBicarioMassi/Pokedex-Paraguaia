import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 80px;  
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 150px;
    
    img {
        width: 100px;
        height: 100px;
    }
    
    p {
        margin-top: 8px;
        font-weight: bold;
        text-transform: uppercase;  
    }
`;

export const LoadMoreButton = styled.button`
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #ffcc00;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: #ffaa00;
    }
`;

export const SearchInput = styled.input`
    display: block;
    margin: 20px auto;
    padding: 10px;
    width: 80%;
    max-width: 400px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
`;
