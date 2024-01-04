// Controle de rotas onde deverá ter autenticação
export default function RouteVerification ({ children }) {
    console.log('Passou pela verificação de rota...');
    return (  children  );
}