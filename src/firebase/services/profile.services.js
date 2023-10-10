import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "profiles");

class UserDataService {
  addProfile = async (id, profileInfo) => {
    console.log(profileInfo, "info");

    const userCollectionRef = collection(db, "profiles");

    return setDoc(doc(db, "profiles", id), {
      profileInfo,
    })
      .then((e) => {
        console.log("success");
        return true;
      })
      .catch((e) => {
        console.log("faiil");
        return false;
      });
    // return addDoc(userCollectionRef,profileInfo)
  };

  updateuser = (id, updatedUser) => {
    const userDoc = doc(db, "profiles", id);
    return updateDoc(userDoc, updatedUser);
  };

  getAlluser = () => {
    return getDocs(userCollectionRef);
  };

  getProfile = async (id) => {
    const profileDoc = doc(db, "profiles", id);
    return getDoc(profileDoc)
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        // Handle the case where the document exists
        console.log("Document exist")
        const profileData = docSnapshot;
        return profileData;
        
      } else {
        // Handle the case where the document does not exist
        console.log("Document does not exist");
        return false; // You can return null or an appropriate value
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
      throw error; // You can rethrow the error or handle it as needed
    });
  };

  deleteuser = (id) => {
    const profile = doc(db, "profiles", id);
    return deleteDoc(profile);
  };
}
export default new UserDataService();
