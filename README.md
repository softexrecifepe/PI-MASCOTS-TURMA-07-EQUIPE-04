# Next.js Template Project

Este projeto serve como um **template base** para iniciar rapidamente novos projetos em Next.js. A ideia é minimizar a necessidade de configurar tudo do zero sempre que for criar uma nova aplicação ou testar novas funcionalidades. Este template já inclui diversas funções comuns, componentes reutilizáveis e uma organização de pastas eficiente.

## 🛠 Tecnologias Utilizadas

- **Next.js**: Framework React para criação de aplicações web.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **Styled-Components**: Para a estilização dos componentes com CSS-in-JS.
- **ESLint**: Configurado para manter o código limpo e padronizado.

## 📂 Estrutura de Pastas

Aqui está a organização das pastas, seguindo as melhores práticas para escalar projetos:

```bash
src/
│
├── components/                  # Componentes reutilizáveis em várias páginas
│   ├── Footer/                  # Componente de rodapé
│   ├── Header/                  # Componente de cabeçalho
│   └── SEO/                     # Componente de otimização para motores de busca
│
├── pages/                       # Páginas da aplicação (Next.js)
│   ├── _app.tsx                 # Customização do App padrão do Next.js
│   ├── _document.tsx            # Customização do Document padrão do Next.js
│   └── index.tsx                # Página inicial
│
├── services/
│   └── api/                     # Serviços de API (chamadas e configuração)
│
├── ui/
│   ├── assets/                  # Recursos estáticos, como ícones e imagens
│   │   ├── icons/               # Ícones em SVG ou outros formatos
│   │   └── images/              # Imagens comuns
│   └── styles/                  # Estilos globais e temas
│
├── utils/
│     functions/               # Funções utilitárias que são reutilizadas em vários projetos
│     ├── getDate.ts           # Função para obter data formatada
│     ├── hexToRgba.ts         # Função para converter HEX para RGBA
│     ├── scrollToElement.ts   # Função de scroll suave para elementos
│     └── valueFormat.ts       # Função para formatação de valores
```

### Componentes Reutilizáveis

- **Header**: Componente padrão de cabeçalho que pode ser facilmente customizado para cada aplicação.
- **Footer**: Componente de rodapé para inclusão de links de redes sociais, direitos autorais, etc.
- **SEO**: Componente que facilita a configuração de meta tags e SEO, permitindo que cada página defina suas próprias propriedades de SEO.

### Funções Utilitárias

Este template inclui funções utilitárias que são comuns em várias aplicações:

- **getDate.ts**: Funções para obter o ano, mês e dia atuais.
- **hexToRgba.ts**: Converte uma cor hexadecimal em rgba, permitindo definir a opacidade.
- **scrollToElement.ts**: Faz scroll suave até um elemento referenciado na página.
- **valueFormat.ts**: Formata um valor numérico para o formato de moeda no momento, apenas para moeda brasileira (BRL).

### Estilos e Temas

O projeto já vem configurado com **styled-components**, permitindo a criação de temas globais e estilos reutilizáveis.

### SEO

A configuração de SEO já está preparada, permitindo o gerenciamento de meta tags e títulos de página diretamente através do componente **SEO**.

## 🔧 Como Usar

1. Clone o repositório:

```bash
git clone https://github.com/r-vilemen/template-next.git
```

2.Instale as dependências:

```bash
npm install
# ou
yarn install
```

3.Rode o projeto em ambiente de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4.Acesse o projeto no navegador:

```text
http://localhost:3000
```

## 🚀 Próximos Passos

- Adicionar mais componentes reutilizáveis, como **modais**, **botões customizados**, etc.
- Incluir mais funções utilitárias, como tratativas de erros e manipulação de strings.
- Implementar autenticação JWT e integração com serviços como Firebase ou Supabase.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo, modificar e compartilhar como desejar.
