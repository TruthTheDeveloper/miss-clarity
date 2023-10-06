import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";

import toast, { Toaster } from "react-hot-toast";

const useSignIn = (name, email, password, setLoading, setSignUpSucess) => {
  const auth = getAuth();

  const _handleSignIn = async () => {
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
        console.log(error.code);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return { _handleSignIn };
};

export default useSignIn;
