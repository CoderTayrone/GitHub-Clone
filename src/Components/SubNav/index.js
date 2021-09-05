import { Link } from 'react-router-dom'
import { ContainerSubNav, ContainerSub } from './styles'

function SubNav() {
  return (
  <ContainerSubNav>
    <ContainerSub>
      <div></div>
      <nav>
        <ul>
         <Link to="/"> <li>Overview</li></Link>
          <Link to="/repositories"><li>Repositories</li></Link>
          <li>Projects</li>
          <li>Packages</li>
        </ul>
      </nav>
    </ContainerSub>
  </ContainerSubNav>
  )
}

export default SubNav
