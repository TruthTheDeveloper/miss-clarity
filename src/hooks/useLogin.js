import { auth } from "@/firebase/firebase-config";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  _handleGoogleAuth,
  signInWithPopup,
} from "firebase/auth";
import profileServices from "@/firebase/services/profile.services";

import { removeWordIfFound } from "@/helper";

import toast, { Toaster } from "react-hot-toast";

const provider = new GoogleAuthProvider();



export const useLogin = (email, password, setLoading, setSignInSucess, id) => {

  
  const _handleGoogleAuth = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem("token", JSON.stringify(user.accessToken));
        
        setSignInSucess(true)
        toast.success("Successfully signIn");


        localStorage.setItem("uid", JSON.stringify(user.uid));

    
        console.log(user, 'token')
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        setSignInSucess(false)

        toast.error("failed to signin");

        console.log(errorMessage, 'messade')
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const _handleSignIn = async () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          localStorage.setItem("token", JSON.stringify(user.accessToken));
          localStorage.setItem("uid", JSON.stringify(user.uid));

          setLoading(false);

          toast.success("Successfully signIn");

          setSignInSucess(true);
        })
        .catch((error) => {
          setLoading(false);
          const message = removeWordIfFound(error.message, "Firebase");
        toast.error("failed to signin");
          
          toast.error(message);
          setLoading(false);
          setSignInSucess(false);
        });
    } else {
      setLoading(false);
    }
  };
  
  
  const result = async () => {
    // console.log(profileDetails?.data()?.profileInfo, "result");
  
      // console.log(profileDetails?.data()?.profileInfo, 'gg')
      const profileDetails = await profileServices.getProfile(id);
      if(profileDetails){

        return profileDetails?.data()?.profileInfo;
      }else{
        return false
      }
    
  };

  return { _handleSignIn, _handleGoogleAuth, result };
};


