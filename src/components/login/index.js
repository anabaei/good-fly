import { signIn, signOut, useSession } from "next-auth/react";
import GoogleButton from "react-google-button";
import {  Button } from "theme-ui";
// import { ModalSignIn } from './modal_sign_in';
import ModalLogin from '../login/modal_sign_in'

export default function Login() {
  const { data: session, status } = useSession();

  return (
    <div>
      {status === "authenticated" ? (
        <>
          <Button ml={2} variant='secondary' onClick={() => signOut()}>Sign out</Button>
        </>
      ) : (
        <>
          <ModalLogin tile="Sing In" />
        </>
      )}
    </div>
  );
}
