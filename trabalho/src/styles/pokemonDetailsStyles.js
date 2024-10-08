import styled from 'styled-components';

export const DetailsCard = styled.div`
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    padding: 15px;
    margin: 10px;
    text-align: center;
`;

export const TypeBadge = styled.span`
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #3b82f6;
    border-radius: 20px;
    background-color: #e0f2fe;
    color: #3b82f6;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #3b82f6;
        color: white;
    }
`;

export const WeaknessBadge = styled.span`
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ef4444;
    border-radius: 20px;
    background-color: #fee2e2;
    color: #ef4444;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ef4444;
        color: white;
    }
`;
