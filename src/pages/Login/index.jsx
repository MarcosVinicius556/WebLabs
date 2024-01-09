import { Container } from './Login.style';
 
function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Container>
      <div>
        <h3>Olá, seja bem vindo!</h3>
        <form onSubmit={handleSubmit}>
          <span>
            <label>Usuário</label>
            <input type="text"/>
          </span>
          <span>
            <label>Senha</label>
            <input type="password"/>
          </span>
          <input type="submit" value="Entrar" />
        </form>
      </div>
    </Container>
  )
}

export default Login;