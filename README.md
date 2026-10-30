# Jesús Blanco — Portafolio de Desarrollo de Software

[![Producción en Cloudflare Pages](https://img.shields.io/badge/Producción-jesus--blanco.pages.dev-F38020?style=for-the-badge&logo=cloudflarepages&logoColor=white)](https://jesus-blanco.pages.dev/)
[![Astro](https://img.shields.io/badge/Astro-v7.4-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> Repositorio del portafolio y reportes técnicos (_Whitepapers_) de **Jesús Blanco**.  
> Alojado en **Cloudflare Pages** con despliegue continuo (CD) automático en cada push.

🌐 **Sitio en vivo:** [https://jesus-blanco.pages.dev/](https://jesus-blanco.pages.dev/)

---

## Perfil & Enfoque de Desarrollo

Desarrollador de Software Full-Stack con foco en **TypeScript (React 19)** y **Python (FastAPI)**.

- **Persistencia & Datos:** Modelado centrado en la **integridad referencial** y consistencia de datos relacionales (PostgreSQL, SQLite), complementado con **desnormalización deliberada** cuando el dominio lo requiere (captura de _snapshots_ inmutables para auditoría histórica y trazabilidad contable).
- **Calidad de Software:** Desarrollo guiado por especificaciones (SDD/TDD), suites de pruebas automatizadas y despliegues en servidores Linux reales.

### Métricas de Impacto

| Métrica                   | Resultado          | Descripción                                                            |
| :------------------------ | :----------------- | :--------------------------------------------------------------------- |
| **Pruebas Automatizadas** | `+2.662` tests     | Cobertura en suites continuas (Pytest + Vitest) sin estado compartido. |
| **Latencia Crítica**      | `-65.8%`           | Reducción en tiempos de respuesta en flujos transaccionales clave.     |
| **Integridad de Datos**   | `+7.000` registros | Migrados con validación estricta y cero pérdida en producción.         |
| **Disponibilidad**        | `+6 meses`         | Uptime ininterrumpido en entornos reales de producción.                |

---

## 📑 Casos de Estudio Técnicos (Whitepapers)

El portafolio incluye reportes técnicos detallados en formato MDX interactivo:

1. **[Yanesu Shisutemu — POS / Sistema Transaccional](https://jesus-blanco.pages.dev/projects/yanesu-shisutemu)**
   - Sistema de ventas e inventario diseñado principalmente para despliegue en **servidores VPS (Linux)**, con arquitectura compatible para empaquetado de escritorio.
   - Optimización de latencias con SQLite en modo WAL y mitigación de cuellos de botella I/O.
   - Suite de **+2.660 pruebas automatizadas** (972 en backend con Pytest y 1.690 en frontend con Vitest) utilizando bases de datos efímeras aisladas para evitar colisiones de estado.
   - Extracción de comprobantes mediante OCR asistido con Gemini.

2. **[Taller-Admin v2.0 — Sistema Transaccional & Migración ETL](https://jesus-blanco.pages.dev/projects/taller-admin)**
   - Plataforma de gestión operativa para talleres mecánicos.
   - Pipeline de migración ETL desde datos heredados hacia un esquema relacional con **integridad referencial estricta**.
   - Congelación de snapshots inmutables de órdenes y vehículos para trazabilidad y auditoría histórica.

---

## 🛠️ Arquitectura del Portafolio

Diseñado para ser ultraligero, rápido y centrado en la lectura técnica:

- **Generación Estática (SSG):** Astro compila a HTML y CSS estáticos de alto rendimiento.
- **JavaScript Mínimo y Focalizado:** En lugar de cargar bundles pesados, el JavaScript en el cliente se reserva únicamente para interactividad puntual y ligera:
  - _Scroll spy_ y seguimiento de lectura en la tabla de contenidos (`IntersectionObserver`).
  - Control de reproducción/pausa eficiente para vídeos demostrativos (`VideoGif`).
  - Navegación fluida entre páginas mediante `ClientRouter` de Astro.
  - Copiado rápido de datos de contacto con feedback visual en el Hero.
- **Content Collections con Zod:** Validación estricta y tipado de los whitepapers en tiempo de compilación (`src/content.config.ts`).
- **Tailwind CSS v4:** Estilos utilitarios rápidos vía `@tailwindcss/vite` con diseño de alto contraste oscuro y tipografía técnica (_Inter_, _Instrument Serif_, _JetBrains Mono_).

---

## 🗂️ Estructura del Repositorio

```text
portfolio/
├── docs/                      # Especificaciones del sistema y planes de diseño
├── public/                    # Archivos estáticos públicos (imágenes, demos)
├── src/
│   ├── components/            # Componentes UI (Navbar, Hero, SkillsMatrix, etc.)
│   │   └── whitepaper/        # Componentes de lectura técnica (TOC, CodeWindow, VideoGif)
│   ├── content/
│   │   └── projects/          # Documentos MDX de los whitepapers
│   ├── content.config.ts      # Esquema de validación con Zod
│   ├── layouts/
│   │   └── Layout.astro       # Layout global, SEO y ClientRouter
│   ├── pages/
│   │   ├── index.astro        # Portada principal
│   │   └── projects/[id].astro# Detalle dinámico de cada caso de estudio
│   └── styles/
│       └── global.css         # Estilos globales y tokens de Tailwind v4
├── astro.config.mjs           # Configuración de Astro
└── package.json               # Dependencias y scripts
```

---

## 🚀 Ejecución Local

### Prerrequisitos

- **Node.js:** `>= 22.23.4` (recomendado con [fnm](https://github.com/Schniz/fnm))
- **pnpm:** Gestor de paquetes

### Comandos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Jesus-1205/portfolio.git
cd portfolio

# 2. Instalar dependencias
pnpm install

# 3. Iniciar servidor de desarrollo (http://localhost:4321)
pnpm dev

# 4. Validar tipos de TypeScript
pnpm astro check

# 5. Compilar versión estática para producción (./dist/)
pnpm build

# 6. Previsualizar compilación local
pnpm preview
```

---

## ☁️ Despliegue en Cloudflare Pages

El repositorio se publica a través del despliegue continuo de **Cloudflare Pages**:

- **Comando de compilación:** `pnpm build`
- **Directorio de salida:** `dist`
- Cada actualización en la rama principal desencadena la compilación y publica la carpeta estática directamente en el borde de Cloudflare.

---

## 📬 Contacto

- **Desarrollador:** Jesús Blanco
- **Web:** [jesus-blanco.pages.dev](https://jesus-blanco.pages.dev/)
- **GitHub:** [@Jesus-1205](https://github.com/Jesus-1205)
- **LinkedIn:** [jesus-enrique-blanco](https://www.linkedin.com/in/jesus-enrique-blanco/)
- **Email:** [jesusenriqueblanco16@gmail.com](mailto:jesusenriqueblanco16@gmail.com)

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
