import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from 'astro/zod'

const projectCollection = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        tagline: z.string(),
        category: z.string().optional(),
        clientOrContext: z.string(),
        timeframe: z.string(),
        productionStatus: z.enum([
            "Producción Activa",
            "Open Source / Mantenimiento",
            "Completado",
        ]),
        role: z.string(),
        slug: z.string().optional(), // Opcional: Astro Content Layer ya provee entry.id
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
                repo: z.url().optional(),
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