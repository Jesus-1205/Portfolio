# Especificación Técnica de Requerimientos (SRS): Portafolio de Ingeniería

## 1. Objetivos del Sistema & Posicionamiento

- **Posicionamiento Principal:** Ingeniero de Software Full-Stack con núcleo en **TypeScript (React 19) y Python (FastAPI)**, enfocado en **modelado de datos transaccionales, integridad referencial y consistencia de datos** (PostgreSQL, SQLite), calidad de software determinista (TDD/SDD) y automatización de infraestructura.
- **Diferenciador Clave:** Capacidad comprobada de desplegar y mantener sistemas en producción bajo restricciones de infraestructura real (desde entornos restringidos de hosting compartido cPanel/Passenger hasta VPS autogestionados en Linux con Docker y CI/CD).
- **Rendimiento Web:** Sitio ultra liviano generado con **Astro**, entrega de HTML estático por defecto (Zero-JS baseline), activando islas interactivas (React) únicamente donde se requiera análisis visual (gráficos de rendimiento o reproductores de demostración técnica).

---

## 2. Arquitectura de Información y Rutas en Astro

```text
src/pages/
├── index.astro                  # Home: Perfil, métricas globales, stack por capas y proyectos destacados
├── projects/
│   ├── index.astro              # Archivo consolidado de proyectos y especificaciones
│   └── [slug].astro             # Caso de estudio en profundidad (Whitepaper técnico)
└── infra-systems.astro          # Desglose de arquitectura de servidores, scripting y flujos M2M
```

### Estructura de Secciones por Página

#### A. Home (`/`)

1. **Hero Técnico:** Declaración de perfil, foco de desarrollo en TypeScript y FastAPI, y resumen de impacto: sistemas transaccionales en producción continua, reducción del 65.8% en latencias críticas y suites con más de 2.600 pruebas automatizadas.
2. **Featured Engineering Whitepapers:** Tarjetas técnicas de _Yanesu Shisutemu_ (POS/ERP Cloud & Desktop) y _Taller-Admin v2.0_ (ERP de Taller & Migración ETL) con métricas de impacto, arquitectura y enlace al desglose.
3. **Core Competencies (Por Capas):**
   - _Frontend:_ React 19, TypeScript, Zustand, Tailwind CSS, Vite, HTML5 Semántico, Jinja2.
   - _Backend & Datos:_ FastAPI, Python, SQLAlchemy 2.0, Pydantic v2, PostgreSQL 16, SQLite, MariaDB/MySQL.
   - _Infraestructura & Servidores:_ VPS Linux (SSH, systemd, cron), Docker & Docker Compose, Nginx Reverse Proxy, cPanel/LiteSpeed.
   - _Ingeniería & Calidad:_ Spec-Driven Development (SDD), TDD, Pytest, Vitest, n8n Agentic Automations.
4. **Certificaciones Técnicas Verificables:**
   - **Relational Database Developer Certification (~300h)** — _freeCodeCamp_ (Sep 2026).
   - **SQL Associate Certification** — _DataCamp_ (Jun 2026 | ID: `SQA0013749388160`).
   - **JavaScript Developer Certification (~300h)** — _freeCodeCamp_ (Ago 2026).
   - **GitHub Foundations (9h)** — _DataCamp_ (Jun 2026 | Credencial `#862,499`).
5. **Filosofía de Desarrollo:** Enfoque en integridad referencial, precisión decimal financiera estricta y adopción de SDD para refactorizaciones complejas.

#### B. Caso de Estudio Técnico (`/projects/[slug]`)

- Formato tipo reporte de ingeniería (_Technical Whitepaper_) con navegación lateral de contenidos (_Table of Contents_ fijo).
- Desglose en 6 módulos: Contexto de Negocio, Modelado y Persistencia, Arquitectura del Sistema, Refactorización con SDD, Matriz de Testing y DevOps/Benchmarks.

#### C. Sistemas, Infraestructura & Automatizaciones (`/infra-systems`)

- **Configuración VPS vs Hosting Compartido:** Trade-offs entre LiteSpeed/cPanel para monolitos y Docker Compose en VPS para microservicios y APIs desacopladas.
- **Pipelines de Resiliencia:** Scripts en Bash para volcados de bases de datos relacionales, cifrado y rotación mediante tareas programadas (cron/systemd).
- **Automatizaciones M2M con n8n:** Flujos de reportería periódica desasistida y agentes técnicos de consulta en Telegram con herramientas seguras.

---

## 3. Contrato de Datos (Content Collections con Zod)

Esquema de validación en `src/content/config.ts` sincronizado con el frontmatter de los Whitepapers:

```typescript
import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    clientOrContext: z.string(),
    timeframe: z.string(),
    productionStatus: z.enum([
      "Producción Activa",
      "Open Source / Mantenimiento",
      "Completado",
    ]),
    role: z.string(),
    slug: z.string(),
    heroMetrics: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
        detail: z.string(),
      }),
    ),
    stack: z.object({
      frontend: z.array(z.string()),
      backend: z.array(z.string()),
      database: z.array(z.string()),
      devops: z.array(z.string()),
    }),
    architecture: z.object({
      pattern: z.string(),
      databaseSchema: z.string(),
      migrationsTool: z.string(),
    }),
    methodologies: z.object({
      sddScope: z.string(),
      testingFrameworks: z.array(z.string()),
      testCount: z.object({
        backend: z.number().default(0),
        frontend: z.number().default(0),
        total: z.number(),
      }),
    }),
    mediaArtifacts: z.object({
      featuredDemo: z.string().optional(),
      architectureDiagram: z.string().optional(),
      screenshots: z.array(
        z.object({
          src: z.string(),
          caption: z.string(),
          highlight: z.string().optional(),
        }),
      ),
    }),
  }),
});

export const collections = {
  projects: projectCollection,
};
```

---

## 4. Estructura Narrativa de los Proyectos Principales

### Proyecto 1: Yanesu Shisutemu — Retail POS & Administrative ERP

- **Contexto y Problema:** Plataforma integral de punto de venta, inventario bimodal y administración contable para retail de bebidas en Venezuela. Operación con doble moneda concurrente (USD/VES), control de envases retornables en circuito cerrado y velocidad crítica de despacho.
- **Decisiones de Arquitectura:**
  - Backend desacoplado en FastAPI con SQLAlchemy 2.0 y Pydantic v2.
  - Frontend reactivo en React 19 con Zustand para estado transaccional atómico y Tailwind CSS v4.
  - Persistencia relacional en 3NF con PostgreSQL 16 y SQLite embebida bajo Alembic batch migrations.
  - Arquitectura de despliegue dual: Cloud contenerizada (Docker Compose + Nginx) y escritorio standalone local (~30 MB RAM) con Tauri 2 en Rust.
- **Evolución con Spec-Driven Development (SDD):**
  - Push-down de cómputos analíticos al motor SQL con `func.sum()`, eliminando iteraciones en bucles de Python.
  - Resolución del problema de resolución IPv6 (`::1`) en Windows eliminando bloqueos de conexión TCP de 2.05 s.
  - Optimización de latencia en `/sales/summary` de 863.6 ms a 184.7 ms (-78.6%) y reducción de payload de red en -76.3%.
- **Estrategia de Testing & Calidad (2.662 pruebas):**
  - _Backend (972 tests en Pytest):_ Regla estricta "Zero-Float" con precisión `Decimal`, desempaque automático concurrente e idempotencia transaccional.
  - _Frontend (1.690 tests en Vitest):_ Simulación de teclado rápido de cajero, validación de cobro mixto (_split payment_) y tiendas Zustand aisladas.
- **Automatización Agéntica:** Extracción estructurada de facturas físicas con Gemini AI OCR y bot de monitoreo ejecutivo en Telegram con 11 herramientas vía n8n.

### Proyecto 2: Taller-Admin v2.0 — ERP Automotriz & Migración de Datos Legados

- **Contexto y Problema:** Modernización digital de un centro de servicios automotrices con más de 8 años de trayectoria y registros descentralizados en múltiples hojas de cálculo de Excel.
- **Estrategia ETL y Diseño de Base de Datos:**
  - Ingesta y saneamiento de más de 7.000 presupuestos y clientes históricos.
  - Persistencia híbrida: Esquema relacional en 3NF para operaciones vivas y datastore inmutable indexado (`historico_reconstruido` con payload JSON) para consultas frías de clientes.
  - Patrón _Snapshot Histórico_: Desnormalización deliberada en cabecera de órdenes para congelar datos del titular y vehículo al emitir el documento, preservando validez fiscal ante transferencias de vehículos.
- **Decisiones Técnicas y Despliegue:**
  - Arquitectura monolítica SSR en capas (Service Layer Pattern) con FastAPI/Flask, plantillas Jinja2 y JavaScript nativo.
  - Algoritmo transaccional `create_split` con bloqueo pesimista (`.with_for_update()`) para particionar órdenes grandes en bloques continuos según el límite físico de renglones en papel membretado.
  - Despliegue y operación continua ininterrumpida por más de 6 meses en hosting compartido Linux (cPanel / Phusion Passenger / Cron) con consumo inferior a 50 MB de RAM.

---

## 5. Plan de Ejecución Modular

|  Fase  | Título                                           | Entregable Técnico                                                                                                                   |
| :----: | :----------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| **01** | **Estructura Base en Astro**                     | Inicialización del proyecto Astro con TypeScript estricto, configuración de Tailwind CSS v4 y definición de `src/content/config.ts`. |
| **02** | **Caso de Estudio: Yanesu Shisutemu**            | Archivo `src/content/projects/yanesu-shisutemu.mdx` integrado con frontmatter validado, esquemas y desglose de métricas.             |
| **03** | **Caso de Estudio: Taller-Admin**                | Archivo `src/content/projects/taller-admin.mdx` integrado con pipeline ETL, decisiones de snapshot y despliegue en cPanel.           |
| **04** | **Página de Infraestructura & Automatizaciones** | Ruta `src/pages/infra-systems.astro` documentando scripts Bash, cron, Docker y flujos n8n.                                           |
| **05** | **Home y Componentes UI**                        | Implementación del layout principal, componentes de benchmarking (antes/después) y visor de certificaciones verificadas.             |
