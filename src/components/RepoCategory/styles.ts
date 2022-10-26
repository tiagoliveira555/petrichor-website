import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  
  display: flex;
`

export const VerifiedIcon = styled.div`
  width: 28px;
  height: 28px;
  margin-right: 12px;

  background: var(--blue-opacity);

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const RepoInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  .title {
    display: flex;
    align-items: center;
    gap: 4px;

    h3 {
      color: var(--title-color);
  
      font-size: 1.12rem;
      font-weight: 800;
      display: inline;
    }
  }
`

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
`