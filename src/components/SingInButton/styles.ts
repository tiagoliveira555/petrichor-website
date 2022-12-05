import styled from "styled-components"

export const GithubButton = styled.button`
  border: none;
  background: var(--title-color);
  color: var(--bg-content);
  cursor: pointer;

  height: 42px;

  padding: 0 12px;
  border-radius: 0.75rem;

  font-size: 1rem;
  font-weight: 700;

  display: flex;
  align-items: center;

  gap: 6px;

  transition: color ease 200ms;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  &:hover {
    background: var(--blue-opacity);
    color: var(--blue);
  }

  &:focus {
    outline: 2px solid var(--blue-outline);
    outline-offset: 2px;
  }
`
