import { Container, Error, LoginCard } from './Login.style';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

 
const loginSchema = z.object({
  user: z.string().min(1, 'Digite o seu usuário!'),
  password: z.string().min(1, 'Digite sua senha!')
});

function Login() {

  const navigate = useNavigate();

  const handleLogin = (obj) => {
    console.log(obj);
    navigate('/home');
  }

  const{register, handleSubmit, formState: {errors} } = useForm({
      resolver: zodResolver(loginSchema)
  });

  return (
    <Container>
      <LoginCard>
        <h3>Olá, seja bem vindo!</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
          <span>
            <label>Usuário</label>
            <input id='user' {...register('user', {required: true})} type="text"/>
          </span>
          <span>
            <label>Senha</label>
            <input id='password' {...register('password', { required: true })} type="password"/>
          </span>
          <input type="submit" value="Entrar" />
        </form>
      </LoginCard>
      {errors.user && <Error>{errors.user.message}</Error>}
      {errors.password && <Error>{errors.password.message}</Error>}
    </Container>
  )
}

export default Login;