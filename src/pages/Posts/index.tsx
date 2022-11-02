import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { PostListing } from './components/PostListing'
import { PostsContainer } from './styles'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Spinner } from '../../components/Header/Spinner'

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Posts() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`,
      )

      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <PostsContainer>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? <Spinner /> : <PostListing posts={posts} />}
    </PostsContainer>
  )
}
