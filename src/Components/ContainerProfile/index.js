import { useEffect, useState } from "react";
import { useGetSearch } from "../../Contexts/SearchContext";
import { api } from "../../services/api";
import CardPopularRepositorie from "../CardPopularRepositorie";
import {
  Container, ContainerProf, ContainerHeaderProfile,
  InsightProfile, AchievementsProfile, HeaderProfile, TitleBodyProfile,
  CardsPopularRepositories, ContainerBodyProfile
} from "./styles";

function ContainerProfile() {

  const {search, setSearch} = useGetSearch()
  const {log, setLog} = useGetSearch()

  const [users, setUsers] = useState();
  const [repos, setRepos] = useState();

  
  useEffect(() => {
    api.get(`users/${log?.displayName ? log?.displayName : search?.name}`)
      .then(response => setUsers(response.data))

    api.get(`users/${search?.name}/repos`)
      .then(response => setRepos(response.data))
  }, [search.name])

  console.log(log)

  return (
    <Container>
      <ContainerProf>

        {/* Header Profile */}

        <ContainerHeaderProfile>
          <HeaderProfile> {/* Header */}
            <img src={users?.avatar_url}></img>
            {
              log?.displayName ? <h2>{log?.displayName}</h2> : <h2>{users?.name}</h2>
            }
            <h3>{users?.login}</h3>
            <a href="#">Edit Profile</a>
          </HeaderProfile>

          <InsightProfile> {/* Insights */}
            <span>{users?.followers} - followers</span>
            <span>{users?.following} - following</span>
            {/* <span>4 - stars</span> */}
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
            {
              repos?.map(repo => (
                <CardPopularRepositorie name={repo?.name}></CardPopularRepositorie>
                ))
              }
          </CardsPopularRepositories>
        </ContainerBodyProfile>
      </ContainerProf>
    </Container>
  )
}

export default ContainerProfile