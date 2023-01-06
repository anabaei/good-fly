import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId:"1006458559620-sfvm7urf8c7tt7te6a5nhm5qt82emc2e.apps.googleusercontent.com",
        clientSecret:"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"
      }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)