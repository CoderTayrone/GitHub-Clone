import styled from 'styled-components'

export const Container = styled.div`

  max-width: 320px;
  margin: 0 auto;
  padding: 2rem 0rem;
  text-align: center;

  img {
    padding: 1rem 0;
  }

  h2 {
    font-weight: normal;
    font-size: 1.75rem;
    color: #ffffff;
    margin-bottom: 0.9375rem;
  }

  form {
    display: flex;
    flex-direction: column;
    background: rgba(4,5,5,0.5);
    padding: 1.5rem;
    margin-top: 0.4rem;
    border: 1px solid rgba(256,256,256,0.2);
    border-radius: .4rem;

    label {
      text-align: start;
      color: rgba(256, 256, 256, 0.7);
      font-size: 0.75rem;
      margin-bottom: 0.675rem;
    }
    input {
      margin: .375rem 0 0.9375rem 0;
      padding: .375rem;
    }
    button {
      background: #2EA44F;
      color: white;
      padding: 0.375rem; 1rem;
      border: none;
      border-radius: .4rem;
    }
  }

  div {
    padding: 0.375rem 1.25rem;
    margin-top: 1rem;
    margin-bottom: 0.8rem;
    font-size: 0.875rem;
    border: 1px solid rgba(256,256,256,0.2);
    border-radius: .3rem;

    p {
      color: white;

      span {
        color: #0366d6;
      }
    }
  }

`