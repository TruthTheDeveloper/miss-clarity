import {  sendPasswordResetEmail} from "firebase/auth";

import { auth } from "@/firebase/firebase-config";



import toast, { Toaster } from "react-hot-toast";

import { useRouter } from 'next/navigation'



const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    // url: "http://localhost:3000/auth/login",
    url:"https://miss-elegance.vercel.app/auth/login",

    // This must be true.
    handleCodeInApp: true,
  };
  

const useForgetPassword = (email, setLoading) => {

  const router = useRouter()

  const _handleForgetPassword = () => {
    sendPasswordResetEmail(auth, email, actionCodeSettings)
      .then(() => {
        // Password reset email sent!
        setLoading(false)

        toast.success('email sent')

        router.push('reset-password-email-sent')

 
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage)

        setLoading(false)

        toast.error('email fail')



        // ..
      });
  };




  return { _handleForgetPassword };
};

export default useForgetPassword;
