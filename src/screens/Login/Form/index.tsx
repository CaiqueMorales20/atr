import {useState} from 'react'
import Input from "../Input";
import { ConnectImg, Connected, ConnectedText, Forgot, ForgotLink, ForgotText, FormS } from "./style";

// Images
import Checked from '../../../assets/login/checked.svg'
import Unhecked from '../../../assets/login/unchecked.svg'
import Button from '../Button';

// Functional Component
export default function Form() {
  // Variables
  const [checked, setChecked] = useState(false);

  // Rendering
  return (
    <FormS>
      <Input name="Email" placeholder="Digite seu email" type="email" />
      <Input name="Senha" placeholder="Digite sua senha" type="password" />
      <Connected>
        <ConnectImg onClick={() => setChecked(!checked)} src={checked? Checked : Unhecked} alt="Continuar logado" />
        <ConnectedText href='#'>Continuar conectado</ConnectedText>
      </Connected>
      <Button />
      <Forgot>
        <ForgotText>Esqueceu a senha ou primeiro acesso ? <ForgotLink href='#'>Clique aqui</ForgotLink></ForgotText>
      </Forgot>
    </FormS>
  );
}