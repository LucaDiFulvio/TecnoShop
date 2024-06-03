import styled from "styled-components";

export const CardImg = styled.img`
  height: 200px;
  width: 200px;
`;

export const HomeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #191645; 
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #ffffff; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 18rem; 


  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const CardTitle = styled.h2`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #191645; 
`;

export const CardDescription = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #191645; 
`;

export const CardButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #ffffff; 
  background-color: #191645; 
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #43c6ac; 
  }
`;
