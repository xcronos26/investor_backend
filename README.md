# Investor Backend

Backend do sistema de investimentos desenvolvido com AdonisJS.

## Requisitos

- Node.js (versão LTS recomendada)
- MySQL
- NPM ou Yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/xcronos26/investor_backend.git
cd investor_backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o banco de dados:
- Crie um arquivo `.env` na raiz do projeto
- Configure as variáveis de ambiente do banco de dados:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=nome_do_banco
```

4. Execute as migrações do banco de dados:
```bash
node ace migration:run
```

## Executando o Projeto

Para iniciar o servidor em modo de desenvolvimento:
```bash
node ace serve
```

O servidor estará disponível em `http://localhost:3333`

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento com hot-reload
- `npm run build`: Compila o projeto para produção
- `npm run start`: Inicia o servidor em modo de produção
- `npm run test`: Executa os testes

## Tecnologias Utilizadas

- AdonisJS
- TypeScript
- MySQL
- Node.js

## Estrutura do Projeto

- `/app` - Controllers, Models e Middlewares
- `/config` - Configurações da aplicação
- `/database` - Migrações e seeds
- `/providers` - Provedores de serviços
- `/start` - Arquivos de inicialização
- `/tests` - Testes automatizados

## Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.
