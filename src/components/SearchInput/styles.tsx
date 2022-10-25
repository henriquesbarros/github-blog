import styled from 'styled-components'

export const SearchInputContainer = styled.form`
  margin: 4.5rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  flex: 1;

  > input {
    outline: none;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme.colors['base-border']};
    background: ${(props) => props.theme.colors['base-input']};
    color: ${(props) => props.theme.colors['base-text']};

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }
`

export const SearchInputHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  p:first-child {
    font-size: ${(props) => props.theme['font-sizes'].l};
  }

  p:last-child {
    font-size: ${(props) => props.theme['font-sizes'].s};
    color: ${(props) => props.theme.colors['base-span']};
  }
`
