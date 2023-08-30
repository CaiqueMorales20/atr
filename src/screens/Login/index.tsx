// Styled Components
import { Content, LoginS, Logo, Title } from "./style";

// Images
import LogoImg from '../../assets/login/logo.svg'
import Form from "./Form";

// Functional Component
export default function Login() {
  // Rendering
  return (
    <LoginS>
      <Content>
        <Logo src={LogoImg} alt="ATR Logo" />
        <Title>Login</Title>
        <Form />
      </Content>
    </LoginS> 
  );
}