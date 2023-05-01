import { getSession, getCsrfToken } from "next-auth/react";


export default async function getToken(req, res) {
 
  const session = await getSession({ req });
  const token = await getCsrfToken({ req });
  
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  console.log(">>>><<", session, token)
  session.test = "testt"

  // const token = session.accessToken;
  return res.status(200).json({ session});
}
