import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";
import jwt from 'jsonwebtoken';

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
    // ...add more providers here
  ],
 
    callbacks: {
      
      async jwt({ token }) {
        console.log("ttt", token)
       
        token.userRole = "admin"
        return token
      },

    async jwt({ token, account, user }) {
      
      console.log("user>>> ", user)
      console.log('account>>', account)
      if (account) {
        token.accessToken = account.access_token
      }
     
      //  const re = await fetch('http://localhost:3001/api/getToken')
      
      // jwt.verify(encodedToken, 'aaaa', (err, decoded) => {
      //   if (err) {
      //     console.log(err.message);
      //     // Error: invalid signature
      //     return;
      //   }
      //   console.log('>>>>',decoded);
      //   // { sub: '1234567890', name: 'John Doe', iat: 1516239022 }
      // });

      return token
    },
    
    async session({ session, token, user }) {
      console.log('session',session)
      
      const sessionWithToken = {
        ...session,
        accessToken: String(token.accessToken)
      }
      return session
    }
      
    //   return sessionWithToken
    // }
  },
}

export default NextAuth(authOptions)
