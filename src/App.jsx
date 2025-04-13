import './App.css';
import { Navbar } from "./Components/Navbar/Navbar";
import { Intro } from "./Components/Intro/Intro";
import { GridSmallBackground } from './Components/GridSmallBackground/GridSmallBackground';
import { Projects } from "./Components/ProjectsSection/Projects";
import { SkillsSection } from "./Components/SkillsSection/SkillsSection";
import { About } from "./Components/About/About";
import { Form } from "./Components/Form/Form";
import { Footer } from "./Components/Footer/Footer";


const siteTitle = "Alejandro Salazar | Desarrollador Frontend React";
const siteDescription = "Portafolio de Alejandro Salazar Lizardiz, desarrollador frontend junior desde Venezuela. Creando interfaces web modernas, rápidas y efectivas con React y Astro.";
const siteUrl = "https://pipoo-py.github.io/lizardizPortfolio/"; 

const App = () => {
  return (
    <>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta name="keywords" content="desarrollador frontend, react, astro, venezuela, portafolio" /> 
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person", 
            "name": "Alejandro Salazar Lizardiz",
            "url": siteUrl,
            "jobTitle": "Desarrollador Frontend",
            "worksFor": {
              "@type": "Organization",
              "name": "Lizardiz Nexus" 
          },
            "sameAs": [ 
              "https://github.com/Pipoo-py",
              "https://www.instagram.com/lizardiznexus/"
              ],
          "knowsAbout": ["React", "JavaScript", "CSS", "HTML", "Frontend Development"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "El Tigre",
        "addressRegion": "Anzoátegui",
        "addressCountry": "VE"
      }
    })}
  </script>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": siteUrl,
        "name": siteTitle,
        "publisher": { 
            "@type": "Person",
            "name": "Alejandro Salazar Lizardiz"
            }
          })}
        </script>
        <link rel="icon" href="icon/favicon.ico" />

      <Navbar />
      <GridSmallBackground className="h-screen">
        <Intro />
      </GridSmallBackground>
      <Projects />
      <SkillsSection />
      <About />
      <Form />
      <Footer />
    </>
  );
};

export default App;
