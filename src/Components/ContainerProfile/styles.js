import styled from 'styled-components'

export const Container = styled.div`

  // background: #0d1117;

`

export const ContainerProf = styled.div`

  max-width: 1280px;
  margin: 0 auto;

  display: flex;

`

export const ContainerHeaderProfile = styled.div`

  max-width: 21.5rem;
  padding: 1rem 1rem;
  margin-top: -4rem;

`

export const HeaderProfile = styled.div`
  color: white;
  max-width: 19.5rem;
  margin: 0 auto;

  img {
    width: 17.5rem;
    clip-path: circle();
  }

  h2 {
    font-size: 1.75rem;
  }
  h3 {
    margin-top: -1.5rem;
    color: #8b949e;
    font-size: 1.25rem;
    font-weight: normal;
  }

  a {
    background: #21262d;
    font-size: 0.9375rem;
    color: #c9d1d9;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    width: 100%;
    padding: 0.5rem;
    border-radius: .4rem;
    border: 1px solid grey;
    margin-bottom: 1rem;
  }

`
export const InsightProfile = styled.div`

  color: #8b949e;
  font-size: 0.9375rem;
  padding: 0 1rem 1rem 1rem;
  border-bottom: 1px solid rgba(256, 256, 256, 0.2);

  span {
    margin-right: .5rem;

  }

`

export const AchievementsProfile = styled.div`

  padding: 0 1rem;
  color: white;

  img {
    max-width: 64px;
  }

`

export const ContainerBodyProfile = styled.div`

  width: 100%;
  padding: 2rem;

`

export const TitleBodyProfile = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #c9d1d9;

`

export const CardsPopularRepositories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`