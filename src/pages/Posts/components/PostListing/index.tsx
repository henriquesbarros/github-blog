import { IPost } from '../..'
import { Post } from './components/Post'
import { PostListingContainer } from './styles'

interface PostListingProps {
  posts: IPost[]
}

export function PostListing({ posts }: PostListingProps) {
  return (
    <PostListingContainer>
      {posts.map((post) => (
        <Post key={post.number} post={post} />
      ))}
    </PostListingContainer>
  )
}
