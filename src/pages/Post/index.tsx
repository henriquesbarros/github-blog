import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { IPost } from '../Posts'
import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [post, setPost] = useState({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPost = async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/${username}/${reponame}/issues/${id}`,
      )

      setPost(response.data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <PostContainer>
      <PostInfo post={post} isLoading={isLoading} />
      <PostContent />
    </PostContainer>
  )
}
