import styled from "styled-components"

export const SubscribeFooter = styled.footer`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    padding: 12px;
  }
`

export const SubscribeForm = styled.form`
  max-width: 550px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const SubscribeText = styled.p`
  max-width: 550px;
  font-weight: bold;
`

export const SubscribeInput = styled.input`
  padding: 6px;
  border-radius: 4px;
  border: 1px solid grey;
  height: 38px;
  width: 220px;
  font-family: 'Inter';
`

export const SubscribeButton = styled.button`
  height: 38px;
  border-radius: 4px;
  border: none;
  width: 100px;
  background-color: ${({ theme }) => theme.colours.light};
  color: ${({ theme }) => theme.colours.black};
  font-family: 'Inter';
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colours.lightest};
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`