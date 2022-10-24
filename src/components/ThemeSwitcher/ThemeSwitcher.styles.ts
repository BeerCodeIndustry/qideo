import styled from 'styled-components'

export const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  :checked + .react-switch-label .react-switch-button {
    left: calc(100% - 0.1rem);
    transform: translateX(-100%);
  }
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 3rem;
  height: 1.5rem;
  background: grey;
  border-radius: 6rem;
  position: relative;
  transition: background-color 0.2s;
  :active .react-switch-button {
    width: 1.5rem;
  }
`

export const Button = styled.div`
  content: '';
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 0.1rem 0 rgba(10, 10, 10, 0.29);
`
