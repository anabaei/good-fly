import { getSession, getCsrfToken, getProviders } from "next-auth/react";

// create jwt
import jwt from 'jsonwebtoken';

export default async function getToken(req, res) {
 
  const session = await getSession({ req });  
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  console.log("sesese", session);
  const jwtToken = jwt.sign({...session}, process.env.SECRET_KEY);
  
  console.log(">>>><<",session)
  console.log("jwtToken== ",jwtToken);

  // const token = session.accessToken;
  return res.status(200).json(jwtToken);
}
