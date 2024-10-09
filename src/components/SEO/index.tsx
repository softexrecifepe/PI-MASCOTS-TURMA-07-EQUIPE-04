import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  author: string;
  url: string;
  image: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  author,
  url,
  image,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Head>
);

export default SEO;

//! 🔸 MODO DE USO:

//? import SEO from '../components/SEO';

//? <SEO
//? title="Título aqui"
//? description="Descrição do conteúdo"
//? keywords="palavra-chave1, palavra-chave2, palavra-chave3"
//? author="Seu Nome"
//? url="https://www.seusite.com"
//? image="https://www.seusite.com/imagem.jpg"
//? />

//! OU

//? import SEO from '../components/SEO';
//? import { LoginPageTextsSEO } from "@/components/SEO/seoTexts";

//? <SEO
//? title={LoginPageTextsSEO.title}
//? description={LoginPageTextsSEO.description}
//? keywords={LoginPageTextsSEO.keywords}
//? author={LoginPageTextsSEO.author}
//? url={LoginPageTextsSEO.url}
//? image={LoginPageTextsSEO.image}
//? />
