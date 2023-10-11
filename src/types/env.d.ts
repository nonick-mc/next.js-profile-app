declare namespace NodeJS {
  interface ProcessEnv extends Env {
    readonly NEXT_PUBLIC_VERCEL_URL: string;
    readonly PORT: string;
  }
}
