// Styled Components
import { Eye, InputS, Label, TextInput, TextInputContainer } from './style'

// Images
import EyeOpen from '../../../assets/login/eye-open.svg'
import { InputType } from './types'
import { useState } from 'react'

// Functional Component
export default function Input(props: InputType) {
  // Variables
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [type, setType] = useState(props.type)

  // Rendering
  return (
    <InputS>
      <Label>{props.name}</Label>
      <TextInputContainer>
        <TextInput type={type} required placeholder={props.placeholder} />
        {props.type === 'password' && (
          <Eye
            onClick={() => {
              setIsPasswordVisible(!isPasswordVisible)
              setType(type === 'password' ? 'text' : 'password')
            }}
          >
            <img src={isPasswordVisible ? EyeOpen : EyeOpen} alt="Ver senha" />
          </Eye>
        )}
      </TextInputContainer>
    </InputS>
  )
}
