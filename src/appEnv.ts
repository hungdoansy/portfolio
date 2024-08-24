import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const appEnv = createEnv({
    server: {
        // server env variables here
    },
    client: {
        NEXT_PUBLIC_SITE_URL: z.string().url(),
    },
    runtimeEnv: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    },
})
