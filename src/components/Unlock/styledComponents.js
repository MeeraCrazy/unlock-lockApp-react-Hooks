// Style your elements here
import styled from 'styled-components'

export const UnlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #3c2940, #0b0c1e);
  min-height: 100vh;
  background-size: cover;
`

export const Image = styled.img`
  height: 10%;
  width: 10%;
  margin-bottom: 10px;
`
export const Message = styled.p`
  color: #e2e8f0;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 50px;
`

export const Button = styled.button`
  background-color: #06b6d4;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  padding-top: 12px;
  padding-right: 24px;
  padding-bottom: 12px;
  padding-left: 24px;
  margin: 20px;
  outline: none;
  cursor: pointer;
  margin-top: 50px;
`
