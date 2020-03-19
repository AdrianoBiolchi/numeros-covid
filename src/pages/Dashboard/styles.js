import styled from 'styled-components';
import img from '../../images/world.svg';

export const Container = styled.div`
  background: red;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 1024px;
  border-radius: 4px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 80px auto;

  header {
    display: flex;
    justify-content: center;
    align-items: center;

    background: #000;
    height: 100px;
  }

  h1 {
    font-size: 20px;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: row;
`;
export const BoxInfo = styled.div`
  width: 40%;
  height: 40%;

  border-radius: 4px;
  background: #333;
  padding: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 18px;
    color: #fff;
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

export const Countries = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr;
  justify-content: center;
  align-items: center;
`;

export const BoxCountry = styled.div`
  width: 100px;
  height: 100%;
  border-radius: 4px;
  background: #333;
  padding: 20px;
`;

export const Loading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
