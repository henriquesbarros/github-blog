import styled from 'styled-components'

export const PostInfoContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
  margin-top: -5.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme.colors['base-profile']};

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    margin-bottom: 1.25rem;

    a,
    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      font-size: ${(props) => props.theme['font-sizes'].link};

      border: none;
      background: none;

      span {
        color: ${(props) => props.theme.colors.blue};
      }

      svg {
        height: 0.75rem;
        width: 0.75rem;
        color: ${(props) => props.theme.colors.blue};
      }
    }
  }

  h2 {
    color: ${(props) => props.theme.colors['base-title']};
  }

  ul {
    display: flex;
    gap: 2rem;
    list-style-type: none;
    margin-top: 0.5rem;

    li {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${(props) => props.theme.colors['base-span']};
    }
  }
`
