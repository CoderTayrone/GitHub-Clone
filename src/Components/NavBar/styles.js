import styled from 'styled-components'

export const ContainerNavBar = styled.div `

  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #24292e;
  padding: .5rem 0;
`

export const ContainerNav = styled.div `

  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;

      li{
        margin-right: 1rem;
      }
    }
  }

  form {

    display: flex;
    input {
      background: transparent;
      border: 1px solid white;
      padding: .5rem .75rem;
      border-radius: .5rem; 
      color: white;

    }

    button {
      background: transparent;
      border: none;
      color: white;
      margin-left: 1rem;
    }
    button + button {
      border: 1px solid white;
      border-radius: .4rem;
      color: white;
      text-decoration: none;
    }
  }

`