import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faUpRightFromSquare,
  faChevronLeft,
  faCalendar,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '../../../../components/Header/Spinner'
import { relativeDateFormmater } from '../../../../utils/formatter'
import { IPost } from '../../../Posts'
import { PostInfoContainer } from './styles'

interface PostInfoProps {
  post: IPost
  isLoading: boolean
}

export function PostInfo({ post, isLoading }: PostInfoProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const formattedDate = relativeDateFormmater(post?.created_at)

  return (
    <PostInfoContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <nav>
            <button onClick={goBack}>
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>VOLTAR</span>
            </button>
            <a href={post.html_url} target="_blank" rel="noreferrer">
              <span>VER NO GITHUB</span>
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </nav>
          <h2>{post.title}</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {post.user?.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {`${post.comments} comentário(s)`}
            </li>
          </ul>
        </>
      )}
    </PostInfoContainer>
  )
}
