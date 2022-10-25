import { Profile } from '../../components/Profile'
import { SearchInput } from '../../components/SearchInput'
import { PostsContainer } from './styles'

export function Posts() {
  return (
    <PostsContainer>
      <Profile />
      <SearchInput />
    </PostsContainer>
  )
}
