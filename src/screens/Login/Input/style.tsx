// Imports
import styled from 'styled-components';

// Styled Components
export const InputS = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`;

export const Label = styled.label`
  font-size: var(--fz-normal);
  color: #5A5A5D;
`
  
export const TextInputContainer = styled.div`
width: 100%;
  position: relative;
`

export const TextInput = styled.input`
  width: 100%;
  height: 3rem;
  background-color: #ffffff;
  border: 1px solid #80CAFF;
  border-radius: .5rem;
  padding-inline: 1.25rem;
  color: #5A5A5D;

  ::placeholder{
    color: #5A5A5D;
  }
`;

export const Eye = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: .5rem;
  width: 1.5rem;
  cursor: pointer;
`