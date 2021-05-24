import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  background: #d04864;
  color: white;
  text-transform: uppercase;
  height: 5.1rem;
  box-shadow: 0px 0.7rem 0.8rem rgba(0, 0, 0, 0.16);
  font-size: 1.6rem;
  border: none;
  border-radius: 2.5rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(90%);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 991px) {
    height: 4.1rem;
    font-size: 1.3rem;
  }
`
