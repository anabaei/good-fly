import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:process.env.CLIENT_ID,
      clientSecret:process.env.CLIENT_SECRET
      // to see what is in profile
      // profile(profile) {
      //   return {
      //     id: profile.id
      //   }
      // }
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET
    })
  ],
    callbacks: {

    async jwt({ token, account, user }) {
      if (account) {
        console.log("user>>> ", user)
        console.log('account>>', account)
        token.accessToken = account.access_token
        Cookies.set('jwtToken', account.access_token);
      }

      
      return token
    },
    
    async session({ session, token, user }) {
      ///////////////////////////////////////////////////////////////////////
      // session.userId = 1
      const sessionWithToken = {
        ...session,
        accessToken: String(token.accessToken)
      }
      
      return sessionWithToken
    }
  },
}

export default NextAuth(authOptions)
