import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faUpRightFromSquare,
  faChevronLeft,
  faCalendar,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { PostInfoContainer } from './styles'

export function PostInfo() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <PostInfoContainer>
      <nav>
        <button onClick={goBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </button>
        <a href="#" target="_blank" rel="noreferrer">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
      </nav>
      <h2>Javascript data types and data structures</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          henriquesbarros
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          {'5 comentário(s)'}
        </li>
      </ul>
    </PostInfoContainer>
  )
}
