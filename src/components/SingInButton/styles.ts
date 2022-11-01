import styled from "styled-components";

export const GithubButton = styled.button`
  border: none;
  background: var(--title-color);
  color: var(--bg-content);
  cursor: pointer;

  height: 42px;

  padding: 0 12px;
  border-radius: .75rem;

  font-size: 1rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  
  gap: 6px;

  transition: color ease 200ms;

  &:hover {
    background: var(--bg);
    color: var(--title-color);

    outline: 2px solid var(--black-outline);
  }

  &:focus {
    outline: 2px solid var(--blue-outline);
    outline-offset: 2px;
  }
`