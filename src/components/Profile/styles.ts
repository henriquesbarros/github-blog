import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  margin-top: -5.5rem;
  border-radius: 10px;
  background: ${(props) => props.theme.colors['base-profile']};

  figure img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 10px;
  }
`

export const ProfileSummary = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileSummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: ${(props) => props.theme['font-sizes'].xl};
    font-weight: ${(props) => props.theme['font-weight'].bold};
    color: ${(props) => props.theme.colors['base-title']};
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: ${(props) => props.theme['font-sizes'].link};

    span {
      color: ${(props) => props.theme.colors.blue};
    }

    svg {
      height: 0.75rem;
      width: 0.75rem;
      color: ${(props) => props.theme.colors.blue};
    }
  }
`

export const ProfileSummaryMain = styled.div`
  margin: 0.5rem 0 1.5rem;

  p {
    font-size: ${(props) => props.theme['font-sizes'].s};
    font-weight: ${(props) => props.theme['font-weight'].regular};
    color: ${(props) => props.theme.colors['base-text']};

    line-height: 160%;
  }
`

export const ProfileSummaryFooter = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme.colors['base-label']};
    }

    span {
      font-size: ${(props) => props.theme['font-sizes'].s};
      font-weight: ${(props) => props.theme['font-weight'].regular};
      color: ${(props) => props.theme.colors['base-subtitle']};

      line-height: 160%;
    }
  }
`
