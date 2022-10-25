import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import {
  ProfileContainer,
  ProfileSummary,
  ProfileSummaryFooter,
  ProfileSummaryHeader,
  ProfileSummaryMain,
} from './styles'

interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

const USER_NAME = 'henriquesbarros'

export function Profile() {
  const [user, setUser] = useState<ProfileData>({} as ProfileData)

  async function getUser() {
    const { data } = await api.get(`users/${USER_NAME}`)

    setUser(data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <ProfileContainer>
      <figure>
        <img src={`${user.avatar_url}`} alt="" />
      </figure>
      <ProfileSummary>
        <ProfileSummaryHeader>
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </ProfileSummaryHeader>
        <ProfileSummaryMain>
          <p>{user.bio}</p>
        </ProfileSummaryMain>
        <ProfileSummaryFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{user.company}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{`${user.followers} seguidor(es)`}</span>
          </div>
        </ProfileSummaryFooter>
      </ProfileSummary>
    </ProfileContainer>
  )
}
