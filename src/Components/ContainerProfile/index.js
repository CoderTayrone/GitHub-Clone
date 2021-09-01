import CardPopularRepositorie from "../CardPopularRepositorie";
import { Container, ContainerProf, ContainerHeaderProfile, 
  InsightProfile, AchievementsProfile, HeaderProfile, TitleBodyProfile, 
  CardsPopularRepositories, ContainerBodyProfile } from "./styles";

function ContainerProfile () {
  return (
    <Container>
        <ContainerProf>

          {/* Header Profile */}

          <ContainerHeaderProfile>
            <HeaderProfile> {/* Header */}
              <img src="https://avatars.githubusercontent.com/u/38590368?v=4"></img>
              <h2>Tayrone</h2>
              <h3>CoderTayrone</h3>
              <a href="#">Edit Profile</a>
            </HeaderProfile>
            
            <InsightProfile> {/* Insights */}
                <span>8 °-followers</span>
                <span>20 °-following</span>
                <span>4 - stars</span>
            </InsightProfile>

              <AchievementsProfile> {/* Achievements */}
                <h2>Achievements</h2>
                <img src="https://github.githubassets.com/images/modules/profile/badge--acv-64.png"></img>
              </AchievementsProfile>

          </ContainerHeaderProfile>

          {/* Body Profile */}
          <ContainerBodyProfile>
            <TitleBodyProfile>
              <h3>Popular repositories</h3>
              <span>Customize your pins</span>
            </TitleBodyProfile>
            <CardsPopularRepositories>
                <CardPopularRepositorie></CardPopularRepositorie>
                <CardPopularRepositorie></CardPopularRepositorie>
                <CardPopularRepositorie></CardPopularRepositorie>
                <CardPopularRepositorie></CardPopularRepositorie>
            </CardsPopularRepositories>
          </ContainerBodyProfile>
        </ContainerProf>
    </Container>
  )
}

export default ContainerProfile