// === TEMA CLARO/OSCURO con persistencia ===
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

function setTheme(theme) {
  body.classList.remove("light", "dark");
  body.classList.add(theme);
  localStorage.setItem("theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}
themeToggle.addEventListener("click", () => {
  setTheme(body.classList.contains("dark") ? "light" : "dark");
});

// === IDIOMA ES/EN (bidireccional, persistente) ===
const langToggle = document.getElementById("langToggle");
let currentLang = localStorage.getItem("lang") || "es";

// === TRADUCCIONES ===
const translations = {
  en: {
    banner_title: "I connect advanced analytics with real-world challenges",
    nav_about: "About",
    nav_value: "Value",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_projects: "Portfolio",
    nav_skills: "Skills",
    nav_contact: "Contact",
    cta_portfolio: "View Portfolio",
    cta_contact: "Contact",
    cta_cv: "Download CV",
    about_kws:
      "Data Scientist | Territorial, social & business analysis | Predictive models & dashboards | Python · SQL · Power BI | Criminology applied to Data",
    about_headline:
      "Data + Criminology: <span class='accent'>a unique approach for strategic decisions</span>",
    about_p1:
      "I am a data scientist with a criminology background, providing a distinct lens on analytical challenges. I combine advanced modeling, territorial analysis and geointelligence with an understanding of social and security phenomena.",
    about_p2:
      "I not only build predictive models, I translate them into clear strategies for public institutions and private companies—impacting logistics, population analysis and risk management.",
    about_badge:
      "I integrate data science and criminology to deliver unique analysis that blends technique and strategy, helping companies make smarter decisions.",
    value_title: "🎯 My value proposition",
    value_intro:
      "A unique profile at the intersection of data science and criminology, translating complex patterns into actionable strategies for public and private sectors.",
    value_1_t: "Strategic analysis",
    value_1_d:
      "I turn social, territorial and business data into clear decisions for executives.",
    value_2_t: "Territorial vision",
    value_2_d:
      "Experience in geointelligence, population segmentation and applied electoral analysis.",
    value_3_t: "Real impact",
    value_3_d:
      "Beyond models, I incorporate social and criminological context into decision-making.",
    value_cta:
      "Open to consulting, government and advanced logistics projects where data drives high-impact solutions.",
    exp_title: "Experience",
    exp_assist_title: "Research Assistant",
    exp_assist_desc:
      "Data collection, cleaning and statistical analysis for criminology projects. Support in literature review, reports and visualizations.",
    exp_cnb_desc:
      "Database integration; dashboards in Power BI. Executive reports and geospatial analysis in QGIS.",
    edu_title: "Education",
    edu_crim: "Bachelor in Criminology and Criminalistics",
    edu_ds: "Data Science — Bootcamp",
    edu_extra: "Additional Training",
    edu_extra_desc: "Geointelligence (CentroGeo), INEGI, ENALLT-UNAM.",
    proj_title: "Portfolio",
    proj_megaline_desc:
      "Classification model (>0.75) to recommend mobile plans.",
    proj_beta_desc: "Predictive churn model with F1 > 0.59.",
    proj_ice_desc: "Exploratory analysis of video game sales and reviews.",
    proj_zyfra_desc: "Regression to predict process yield (gold).",
    proj_taxi_desc: "Time-series forecasting of hourly taxi demand (RMSE < 48).",
    proj_rusty_desc: "Car price prediction with high accuracy.",
    proj_sure_desc: "Data masking while preserving model performance.",
    proj_film_desc: "NLP for negative reviews (F1 ≥ 0.85).",
    proj_zuber_desc: "Weather impact on ride-hailing demand in Chicago.",
    skills_title: "Skills",
    contact_title: "Contact",
    contact_desc: "Let’s talk about your project or analytical challenges."
  },
  es: {
    banner_title: "Conecto la analítica avanzada con problemáticas reales",
    nav_about: "Sobre mí",
    nav_value: "Propuesta",
    nav_experience: "Experiencia",
    nav_education: "Educación",
    nav_projects: "Portafolio",
    nav_skills: "Habilidades",
    nav_contact: "Contacto",
    cta_portfolio: "Ver portafolio",
    cta_contact: "Contacto",
    cta_cv: "Descargar CV",
    about_kws:
      "Científico de Datos | Análisis territorial, social y comercial | Modelos predictivos y dashboards ejecutivos | Python · SQL · Power BI | Criminología aplicada a Datos",
    about_headline:
      "Datos + Criminología: <span class='accent'>un enfoque único para decisiones estratégicas</span>",
    about_p1:
      "Soy un científico de datos con formación en criminología, lo que me otorga una visión distinta frente a los retos analíticos. Combino técnicas avanzadas de modelado, análisis territorial y geointeligencia con la comprensión de fenómenos sociales y de seguridad.",
    about_p2:
      "Mis habilidades me permiten no solo desarrollar modelos predictivos, sino traducirlos en estrategias claras y aplicables para instituciones públicas y empresas privadas, generando impacto en áreas como logística, análisis poblacional y gestión de riesgos.",
    about_badge:
      "Integro ciencia de datos y criminología para ofrecer un análisis único que combina técnica y estrategia, ayudando a las empresas a tomar decisiones más inteligentes.",
    value_title: "🎯 Mi propuesta de valor",
    value_intro:
      "Soy un profesional único en el cruce entre ciencia de datos y criminología, capaz de traducir patrones complejos en estrategias accionables que impactan tanto en el sector público como en el privado.",
    value_1_t: "Análisis estratégico",
    value_1_d:
      "Transformo datos sociales, territoriales y comerciales en decisiones claras para equipos directivos.",
    value_2_t: "Visión territorial",
    value_2_d:
      "Experiencia en geointeligencia, segmentación poblacional y análisis electoral aplicado.",
    value_3_t: "Impacto real",
    value_3_d:
      "No solo desarrollo modelos, integro contexto social y criminológico en la toma de decisiones.",
    value_cta:
      "Abierto a consultoría, gobierno y logística avanzada, donde los datos generen soluciones de alto impacto.",
    exp_title: "Experiencia",
    exp_assist_title: "Asistente de Investigación",
    exp_assist_desc:
      "Recopilación, limpieza y análisis estadístico de datos en proyectos de criminología aplicada. Apoyo en revisión de literatura, elaboración de informes y visualizaciones.",
    exp_cnb_desc:
      "Integración y depuración de bases de datos; creación de tableros en Power BI. Elaboración de reportes ejecutivos y análisis geoespacial en QGIS.",
    edu_title: "Educación",
    edu_crim: "Licenciatura en Criminología y Criminalística",
    edu_ds: "Ciencia de Datos — Bootcamp",
    edu_extra: "Formación Complementaria",
    edu_extra_desc: "Geointeligencia (CentroGeo), INEGI, ENALLT-UNAM.",
    proj_title: "Portafolio",
    proj_megaline_desc:
      "Modelo de clasificación (>0.75) para recomendar planes móviles.",
    proj_beta_desc:
      "Modelo predictivo con F1 > 0.59 para anticipar cancelación.",
    proj_ice_desc: "EDA de ventas y reseñas de videojuegos para 2017.",
    proj_zyfra_desc: "Regresión para predecir rendimiento en procesos.",
    proj_taxi_desc: "Series temporales con RMSE < 48 por hora.",
    proj_rusty_desc: "Regresión para precios de autos con alta precisión.",
    proj_sure_desc: "Anonimización manteniendo calidad de modelos.",
    proj_film_desc: "NLP para reseñas negativas (F1 ≥ 0.85).",
    proj_zuber_desc: "Impacto del clima en la demanda en Chicago.",
    skills_title: "Habilidades",
    contact_title: "Contacto",
    contact_desc: "¿Hablamos de tu proyecto o retos analíticos?"
  }
};

// === INICIALIZACIÓN DE BOTONES ===
window.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const langToggle = document.getElementById("langToggle");
  let currentLang = localStorage.getItem("lang") || "es";

  // === TEMA CLARO/OSCURO ===
function setTheme(theme) {
  body.classList.remove("light", "dark");
  body.classList.add(theme);
  localStorage.setItem("theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
  const newTheme = body.classList.contains("dark") ? "light" : "dark";
  setTheme(newTheme);
});
  
// === MENU RESPONSIVO ===
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// inicializar tema guardado o por defecto
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);


  // === IDIOMA ===
  function setLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    localStorage.setItem("lang", lang);
    currentLang = lang;
    langToggle.textContent = lang === "es" ? "🌐 ES" : "🌐 EN";
  }

  langToggle.addEventListener("click", () => {
    const newLang = currentLang === "es" ? "en" : "es";
    setLang(newLang);
  });

  setLang(currentLang);

  // === FOOTER AÑO DINÁMICO ===
  document.getElementById("year").textContent = new Date().getFullYear();
});
