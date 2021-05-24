import styled from 'styled-components'
import LoginBack from 'assets/images/login-back.jpeg'

export const AuthorizePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const AuthorizeBackground = styled.div`
  background-image: url(${LoginBack});
  width: 100%;
  height: 100%;
  background-size: cover;
  filter: opacity(50%);
  position: absolute;
  z-index: -1;
`

export const FormContainer = styled.div`
  padding: 0 6rem;
  background: white;
  width: 519px;
  height: 757px;
  border-radius: 1rem 1rem 0 0;
  max-height: calc(100vh - 1.1rem);

  @media (max-width: 991px) {
    height: 90vh;
    width: 100vw;
    padding: 0 4rem;
    overflow-y: scroll;
    border-radius: 0;
  }

  h1 {
    color: #333333;
    font-size: 34px;
    text-align: center;
    margin: 6.3rem 0;
    font-weight: 700;

    @media (max-width: 991px) {
      font-size: 24px;
      margin: 4.3rem 0;
    }
  }
`

export const ForgotPassword = styled.a`
  font-size: 1.4rem;
  color: #333333;
  font-weight: 400;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  margin-bottom: 3.5rem;

  @media (max-width: 991px) {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }
`

export const NetworksTitle = styled.h5`
  font-size: 1.6rem;
  color: #333333;
  font-weight: 700;
  margin-top: 5.6rem;
  text-align: center;

  @media (max-width: 991px) {
    font-size: 1.3rem;
    margin-top: 4.6rem;
  }
`

export const NetworkContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const NetworkIcon = styled.img`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 0.5rem;
  cursor: pointer;
  margin-bottom: 2.5rem;

  @media (max-width: 991px) {
    height: 3.5rem;
    width: 3.5rem;
  }
`
