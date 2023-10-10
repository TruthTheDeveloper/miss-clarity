import {
  getAuth,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { db } from "../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";

import toast, { Toaster } from "react-hot-toast";
import { removeWordIfFound } from "@/helper";
import { useRouter } from 'next/navigation'


const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  // url: "http://localhost:3000/auth/login",
  url:"https://miss-elegance.vercel.app/auth/login",
  // This must be true.
  handleCodeInApp: true,
};

const provider = new GoogleAuthProvider();


const useSignUp = (name, email, password, setLoading, setSignUpSucess) => {
  const auth = getAuth();
  const router = useRouter()


  const _handleGoogleAuth = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        toast.success("Successfully signed up");
        router.push("/profile")

        localStorage.setItem("uid", JSON.stringify(user.uid));



        console.log(user, "token");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage, "messade");
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const _handleEmailVerification = (email) => {
    console.log(email, "email");
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        localStorage.setItem("emailForSignIn", email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
        // ...
      });
  };

  const _handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("uid", JSON.stringify(user.uid));

        setLoading(false);
        toast.success("Successfully signed up");
        setSignUpSucess(true);

        setDoc(doc(db, "users", user.uid), {
          name: name,
        });

        localStorage.setItem("token", JSON.stringify(user.accessToken));

        // ...
      })
      .then((res) => {
        console.log(res);
      })

      .catch((error) => {
        setLoading(false);
        const message = removeWordIfFound(error.message, "Firebase");
        toast.error(message);
        console.log(error.message, "gaga");
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return { _handleSignUp, _handleEmailVerification, _handleGoogleAuth };
};

export default useSignUp;
