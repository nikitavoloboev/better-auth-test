import { model, string } from "ronin/schema"

export const UserModel = model({
  slug: "user",
  fields: {
    email: string({ unique: true, required: true }),
    // TODO: not sure if needed for better auth
    jwtAccessToken: string(),
  },
})
