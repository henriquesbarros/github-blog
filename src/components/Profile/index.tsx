import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import {
  ProfileContainer,
  ProfileSummary,
  ProfileSummaryFooter,
  ProfileSummaryHeader,
  ProfileSummaryMain,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <figure>
        <img src="https://github.com/henriquesbarros.png" alt="" />
      </figure>
      <ProfileSummary>
        <ProfileSummaryHeader>
          <h1>Henrique Barros</h1>
          <NavLink to="#">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </NavLink>
        </ProfileSummaryHeader>
        <ProfileSummaryMain>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </ProfileSummaryMain>
        <ProfileSummaryFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>henriquesbarros</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Compass.UOL</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{`${32} seguidores`}</span>
          </div>
        </ProfileSummaryFooter>
      </ProfileSummary>
    </ProfileContainer>
  )
}
