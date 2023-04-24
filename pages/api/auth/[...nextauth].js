import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:process.env.CLIENT_ID,
      clientSecret:process.env.CLIENT_SECRET,
      accessTokenUrl: 'https://accounts.google.com/o/oauth2/token',
      requestTokenUrl: 'https://accounts.google.com/o/oauth2/auth',
      authorization:'https://accounts.google.com/o/oauth2/auth?response_type=code',
      profileUrl: 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
      // to see what is in profile
      // profile(profile) {
      //   return {
      //     id: profile.id
      //   }
      // }
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      accessTokenUrl: "https://accounts.facebook.com/o/oauth2/token",
    })
    // ...add more providers here
  ],
  callbacks: {
    signIn: async () => {
      return true
    },

    async jwt({ token, account }) {
      console.log("token", token)
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    
    async session({ session, token, user }) {
      const sessionWithToken = {
        ...session,
        accessToken: String(token.accessToken)
      }
      
      return sessionWithToken
    }
  },
}

export default NextAuth(authOptions)
