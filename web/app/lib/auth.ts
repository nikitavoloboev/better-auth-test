import { twoFactor } from "better-auth/plugins"
import { betterAuth } from "better-auth"
// TODO: how to replace with RONIN?
// import Database from "better-sqlite3";

export const auth = betterAuth({
  // database: new Database("data.db"),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      enabled: true,
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
  plugins: [twoFactor()],
})
