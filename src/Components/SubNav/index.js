import { ContainerSubNav, ContainerSub } from './styles'

function SubNav() {
  return (
  <ContainerSubNav>
    <ContainerSub>
      <div></div>
      <nav>
        <ul>
          <li>Overview</li>
          <li>Repositories</li>
          <li>Projects</li>
          <li>Packages</li>
        </ul>
      </nav>
    </ContainerSub>
  </ContainerSubNav>
  )
}

export default SubNav
