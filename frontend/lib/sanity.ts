import { createClient } from 'next-sanity'

export const client = createClient({
    projectId: "hg49o0mu",
    dataset: "production",
    apiVersion: "2026-05-03",
    useCdn: false,
})