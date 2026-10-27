# Especificación Técnica de Diseño & Arquitectura de UI (Portafolio de Ingeniería)

Este documento condensa los patrones de interfaz, reglas de maquetación, tokens de diseño y contratos de integración analizados a partir de referencias técnicas reales. Está diseñado para implementarse sobre **Astro**, **Tailwind CSS** y **Astro Content Layer**.

---

## 1. Fundamentos Visuales & Design Tokens

### 1.1 Filosofía de Color y Accesibilidad

La interfaz adopta una estética _Engineered Dark_, neutral y profunda (Zinc/Neutral), eliminando tintes azules saturados o degradados invasivos para asegurar legibilidad técnica bajo estándar WCAG AAA.

```css
:root {
  /* Lienzo y Superficies */
  --bg-canvas: #09090b; /* Zinc-950 puro */
  --bg-surface: #121215; /* Zinc-900 elevado para Cards */
  --bg-surface-subtle: #18181b; /* Zinc-900 secundario para tags/chips */

  /* Bordes de Definición */
  --border-default: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.22);
  --border-subtle: rgba(255, 255, 255, 0.04);

  /* Jerarquía de Texto */
  --text-primary: #fafafa; /* Zinc-50 */
  --text-secondary: #a1a1aa; /* Zinc-400 (contraste > 5.5:1) */
  --text-muted: #71717a; /* Zinc-500 */

  /* Acentos Semánticos de Ingeniería */
  --accent-emerald: #10b981; /* Estados vivos, métricas positivas, tests */
  --accent-sky: #38bdf8; /* Arquitectura, enlaces a Whitepapers */
  --accent-indigo: #818cf8; /* APIs, integraciones y WebSockets */
  --accent-amber: #f59e0b; /* Procesos ETL, persistencia legacy */
}
```

### 1.2 Fondo Atmosférico de Alto Rendimiento (Dot Matrix)

Fondo técnico vectorial ligero que no satura el hilo de composición de la GPU:

```html
<div
  class="fixed inset-0 -z-10 h-full w-full bg-[#09090b] bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
></div>
```

---

## 2. Tipografía & Ritmo Editorial

La tipografía combina una estética editorial refinada con la rigurosidad visual de un entorno de ingeniería:

1. **Display & Títulos Principales:** Contraste híbrido.

- Tipografía Sans Bold limpia (_Geist Sans_, _Inter_) complementada con itálicas en Serif refinada (_Instrument Serif_ o _Playfair Display_) en términos conceptuales clave (ej. `Things I've built.`, `Systems that scale`).

2. **Cuerpo de Lectura & Párrafos:**

- Sans-serif neutra (`text-neutral-300`), alineación estricta a la izquierda (`text-left`), ancho máximo controlado (`max-w-2xl` o `max-w-prose`) y leading relajado (`leading-relaxed` / 1.625) para evitar fatiga ocular.

3. **Metadatos Técnicos & Código:**

- Tipografía monoespaciada (_Geist Mono_, _JetBrains Mono_) en mayúsculas atenuadas o tags compactos para rangos de fechas, contadores, tags de stack, rutas y métricas.

---

## 3. Shell Global & Componentes de Navegación

### 3.1 Floating Island Navbar

- **Posición y Estructura:** `fixed top-4 inset-x-0 mx-auto w-fit z-50`.
- **Estilo:** `rounded-full border border-white/10 bg-neutral-950/80 px-4 py-2 backdrop-blur-md shadow-2xl shadow-black/50`.
- **Elementos Integrados:**
- Identificador de perfil / Monograma interactivo.
- Enlaces ancla directos: `#projects`, `#skills`, `#experience`, `#infra`.
- Atajo rápido a Command Palette (`⌘K`) o enlace de contacto directo.

- **Regla Anti-Colisión (Estricta):** Toda sección referenciable debe incluir `scroll-mt-28` para impedir que el header sticky oculte los títulos de sección al navegar.

### 3.2 Hero Section de Impacto Técnico

- **Badge de Disponibilidad Operativa:** Indicador circular con pulso verde (`animate-ping`) seguido de texto monoespaciado (`Available for roles` o `Building Yanesu Shisutemu`).
- **Propuesta de Valor Concisa:** Declaración orientada a resolución de problemas reales (sistemas transaccionales, consistencia de datos, optimización de latencia y despliegue en entornos de producción).
- **Barra de Acciones (CTA Bar):**
- Botón primario: Contacto / Agendar reunión técnica.
- **Quick-Copy Email:** Componente interactivo que copia la dirección de correo al portapapeles con micro-feedback inmediato (cambio de icono y tooltip `¡Copiado!`), evitando abrir clientes de correo por defecto.
- Accesos directos a repositorios y perfiles (GitHub, LinkedIn) con área mínima de contacto de 44x44px.

---

## 4. Estructura de Proyectos (Bento Grid Híbrido)

La visualización de proyectos se divide en dos niveles de profundidad para destacar el trabajo de arquitectura principal:

```text
┌────────────────────────────────────────────────────────────────────────┐
│  FEATURED SPLIT-CARD (PROYECTO INSIGNIA: YANESU SHISUTEMU)             │
├───────────────────────────────────┬────────────────────────────────────┤
│ Columna 1: Showcase Visual        │ Columna 2: Ficha de Arquitectura   │
│ - Preview UI / Video Demo         │ - Tagline & Dominio de Negocio     │
│ - Ventana con marco minimalista   │ - Grid de 4 Métricas Clave (Hero)  │
│ - Badges de Entorno (VPS/Tauri)   │ - 3 Viñetas de Decisiones Técnicas │
│                                   │ - Stack Tags por Capas             │
│                                   │ - Acciones: [Demo ↗] [Case Study →]│
└───────────────────────────────────┴────────────────────────────────────┘

┌───────────────────────────────────┬────────────────────────────────────┐
│  SECONDARY BENTO: TALLER-ADMIN    │  SECONDARY BENTO: INFRA & SCRIPTS  │
├───────────────────────────────────┼────────────────────────────────────┤
│ - Marca de agua "02"              │ - Marca de agua "03"               │
│ - Dominio: ERP Taller / ETL       │ - Dominio: Automatización Linux    │
│ - Métrica: +7.000 filas migradas  │ - Métrica: Pipelines Bash / Cron   │
│ - Highlights: .with_for_update()  │ - Highlights: Agentes Telegram/n8n │
│ - Stack: FastAPI / Jinja / SQLite │ - Stack: Docker / cPanel / systemd │
│ - Enlace directo a Whitepaper →   │ - Enlace a Infra-Systems →         │
└───────────────────────────────────┴────────────────────────────────────┘

```

### 4.1 Anatomía de la Tarjeta Técnica

Cada tarjeta de proyecto debe responder directamente a criterios de auditoría técnica:

1. **Header:** Categoría en mayúsculas + período temporal (`MMM YYYY — Presente`) + marca de agua numérica semi-transparente (`01`, `02`).
2. **Título y Propósito:** Nombre del sistema enlazado a la transición del cliente (`transition:name`) y resumen ejecutivo del problema resuelto.
3. **Métricas Duras (Hero Metrics):** Bloque visual con valores numéricos verificables (latencia reducida, volumen migrado, cantidad de tests, tasa de colisiones).
4. **Highlights Técnicos (2 a 3 viñetas):** Explicación de la solución a bajo nivel (ej. _Push-down de agregaciones a SQL eliminando N+1_, _Reserva pesimista en papel continuo_, _Idempotencia transaccional_).
5. **Footer:** Chips de stack agrupados y botón dual (`Live Demo ↗` opcional y `Case study →` obligatorio).

---

## 5. Matriz de Habilidades por Capas de Ingeniería

Reemplaza los listados planos de iconos por una matriz estructurada en un Bento de cuatro cuadrantes:

```text
┌──────────────────────────────────┬──────────────────────────────────┐
│ FRONTEND & ESTADO REACTIVO       │ BACKEND & PERSISTENCIA           │
│ - React 19, TypeScript 5         │ - Python 3.12, FastAPI, Pydantic │
│ - Zustand (Atómico/Transaccional)│ - PostgreSQL 16, SQLite (WAL)    │
│ - Tailwind CSS v4, Vite 6        │ - SQLAlchemy 2.0, Alembic Migr.  │
├──────────────────────────────────┼──────────────────────────────────┤
│ INFRAESTRUCTURA & DEVOPS         │ INGENIERÍA DE CALIDAD & SDD      │
│ - Linux VPS (systemd, cron, SSH) │ - Spec-Driven Development (SDD)  │
│ - Docker & Docker Compose v2     │ - Pytest (Suite transaccional)   │
│ - Nginx Reverse Proxy / cPanel   │ - Vitest (Aislamiento de tiendas)│
│ - Tauri 2 (Rust Desktop Wrapper) │ - Ingestión Multimodal (LLM OCR) │
└──────────────────────────────────┴──────────────────────────────────┘

```

Cada tecnología se renderiza dentro de un chip interactivo con micro-hover (`hover:bg-white/10 hover:border-white/20 transition-colors duration-150`).

---

## 6. Historial Profesional, Validación & Certificaciones

### 6.1 Split Layout de Trayectoria

- **Columna Izquierda (60% - Timeline de Roles):**
- Cargo, Entidad, Ubicación y Fecha en tipografía monoespaciada.
- Párrafo de impacto operativo en el negocio.
- Viñetas con logros cuantificables.
- Fila inferior de tags con el stack tecnológico utilizado en ese puesto.

- **Columna Derecha (40% - Bento de Validación Externa):**
- **Tarjeta GitHub:** Enlace al perfil (`@Jesus-1205`), destacando repositorios públicos y reconocimientos OSS.
- **Tarjeta LinkedIn:** Enlace directo para contacto profesional.
- **Bento de Certificaciones Verificables:** Componentes modulares basados en `certifications.ts`:
- Relational Database Developer (~300h, freeCodeCamp).
- SQL Associate Certification (DataCamp, Credencial `SQA0013749388160`).
- JavaScript Developer Certification (~300h, freeCodeCamp).
- GitHub Foundations (DataCamp, Credencial `#862,499`).
- Cada certificación contiene badge de verificación externa con enlace directo.

---

## 7. Estrategia de Motion & Transiciones (Zero-Lag)

### 7.1 Reglas de Microinteracción

- Las animaciones deben ser funcionales y no obstaculizar la navegación.
- Duración estándar: `150ms` a `250ms` para estados interactivos (hover, active, focus).
- Duración de entrada: `350ms` a `450ms` para revelado al hacer scroll.
- Curva de aceleración: `cubic-bezier(0.16, 1, 0.3, 1)` (suave desaceleración elástica).
- Propiedades estrictamente animadas: Exclusivamente `transform` y `opacity` para garantizar renderizado por hardware a 60 FPS sin provocar _layout reflows_.

### 7.2 Animación de Entrada en Scroll con Tailwind

Utilidad de animación sin sobrecarga de librerías externas:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal-on-scroll {
  animation: fadeInUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

### 7.3 Transición de Páginas con Astro `ClientRouter`

Para conectar fluidamente la navegación entre la vista principal y los casos de estudio técnicos:

1. El layout global incluye `<ClientRouter />`.
2. Las tarjetas de proyectos asignan directivas de transición a títulos e imágenes principales:

```astro
<h3 transition:name={`project-title-${project.id}`}>
  {project.data.title}
</h3>

```

3. En la página de destino (`/projects/[slug].astro`), el encabezado del Whitepaper conserva el mismo identificador `transition:name`, generando una transición nativa sin saltos visuales.

---

## 8. Contrato de Datos: `src/content.config.ts`

Configuración definitiva tipada con Zod, completamente compatible con los archivos `.mdx` existentes (`yanesu-shisutemu.mdx`, `taller-admin.mdx`) e integrada con las necesidades del sistema visual:

```typescript
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
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
    slug: z.string().optional(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
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
    links: z
      .object({
        live: z.string().url().optional(),
        repo: z.string().url().optional(),
      })
      .optional(),
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
