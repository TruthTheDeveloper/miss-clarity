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






class VoteDataService {
  addVote = async (profileId, voteData) => {
    const voteCollectionRef = collection(db, `profiles/${profileId}/vote`);
    

  
    return addDoc(voteCollectionRef, voteData)
    .then(e => {
      console.log('success')
      return true
    })
    .catch( e => {
      console.log('faiil')
      return false
    }
    )
    // return addDoc(userCollectionRef,profileInfo)

  };

 
  getAllUserVote = (profileId) => {
    const voteCollectionRef = collection(db, `profiles/${profileId}/vote`);
    return getDocs(voteCollectionRef);
  };


  getUserSignedInState = async (profileId) => {
    const voteCollectionRef = collection(db, `profiles/${profileId}/vote`);
    return getDocs(voteCollectionRef)
    .then(e => {
      console.log('success')
      return true
    })
    .catch( e => {
      console.log('faiil')
      return false
    }
    )

  }

 
}
export default new VoteDataService();
