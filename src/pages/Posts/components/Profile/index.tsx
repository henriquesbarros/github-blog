import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Spinner } from '../../../../components/Header/Spinner'
import { api } from '../../../../lib/axios'
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

const username = import.meta.env.VITE_GITHUB_USERNAME

export function Profile() {
  const [user, setUser] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(true)

  async function getUser() {
    try {
      setIsLoading(true)
      const { data } = await api.get(`users/${username}`)

      setUser(data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
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
        </>
      )}
    </ProfileContainer>
  )
}
