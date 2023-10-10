import {  updatePassword } from "firebase/auth";
import { auth } from "@/firebase/firebase-config";


const user = auth.currentUser;



const useResetPassword = (password, credential, setLoading, setSignInSucess) => {
    const _handleResetPassword = () => {
      updatePassword(user, password).then(() => {
        // Update successful.
      }).catch((error) => {
        // An error ocurred
        // ...
      });
    };


    const reAuthenticateUser = () => {
      reauthenticateWithCredential(user, credential).then(() => {
        // User re-authenticated.
      }).catch((error) => {
        // An error ocurred
        // ...
      });
    }
  
  
  
  
    return { _handleResetPassword, reAuthenticateUser };
  };

  export default useResetPassword;


