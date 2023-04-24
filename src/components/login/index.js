import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import {  Button } from "theme-ui";
// import { ModalSignIn } from './modal_sign_in';
import ModalSignIn from '../login/modal_sign_in'

export default function Login() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("session=<>=",session)
    if (session) {
      // check db if exist the user, then don't need to signup
      // 
      
      fetch('http://localhost:3001/users/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(session),
      })
        .then((res) => console.log("came here", res))
        .then((data) => {
        
          setUser(data.user);
        })
        .catch((error) => {
          console.log("came here er", error)
       
          setError(error);
        });
    }
  }, [session]);


  return (
    <div>
      {status === "authenticated" ? (
        <>
          <Button ml={2} variant='secondary' onClick={() => signOut()}>Sign out</Button>
        </>
      ) : (
        <>
          {/* jlkj */}
      
          <ModalSignIn tile="Sing In" />
        </>
      )}
    </div>
  );
}
