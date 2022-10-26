import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { PostListing } from './components/PostListing'
import { PostsContainer } from './styles'

export function Posts() {
  return (
    <PostsContainer>
      <Profile />
      <SearchInput />
      <PostListing />
    </PostsContainer>
  )
}
