// Imports
import styled from 'styled-components';

// Styled Components
export const FormS = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: min(90vw, 27rem);
`;

export const Connected = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  cursor: pointer;
`

export const ConnectedText = styled.p`
  font-size: var(--fz-small);
  color: #80CAFF;
`

export const ConnectImg = styled.img`
  width: 1.125rem;
  cursor: pointer;
`;


export const Forgot = styled.div`
  margin-top: 2rem;
  display: flex;
`;

export const ForgotText = styled.p`
  color: #504C57;
  font-size: var(--fz-small);
  `;

export const ForgotLink = styled.a`
  color: #80CAFF;
  font-size: var(--fz-small);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;