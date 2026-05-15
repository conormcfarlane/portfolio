import { createClient } from 'next-sanity'

export const client = createClient({
    projectId: "l37otzdg",
    dataset: "production",
    apiVersion: "2025-05-08",
    useCdn: true,
});

console.log("PROJECT ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
console.log("DATASET:", process.env.NEXT_PUBLIC_SANITY_DATASET)