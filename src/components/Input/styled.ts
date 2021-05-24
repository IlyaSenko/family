import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 2.5rem 0;
  margin-bottom: 3rem;

  @media (max-width: 991px) {
    padding: 1.5rem 0;
    margin-bottom: 2rem;
  }

  svg {
    height: 20px;
    width: 20px !important;
    margin-left: 1rem;

    @media (max-width: 991px) {
      height: 15px;
      width: 15px !important;
    }

    path {
      fill: #c7c7c7;
    }
  }
`

export const Label = styled.div`
  font-size: 1.4rem;
  color: #333333;
  font-weight: 700;
  margin-left: 1rem;

  @media (max-width: 991px) {
    font-size: 1.2rem;
  }
`

export const StyledInput = styled.input`
  width: calc(100% - 4rem);
  font-size: 1.4rem;
  border: none;
  color: #333333;

  @media (max-width: 991px) {
    font-size: 1.2rem;
  }

  &:focus {
    outline: none;
  }
`

export const BottomLine = styled.div`
  background: #c7c7c7;
  width: 100%;
  height: 0.2rem;
  position: absolute;
  bottom: 0;
`
