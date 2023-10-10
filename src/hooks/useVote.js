import { Timestamp } from 'firebase/firestore'
import voteServices from "@/firebase/services/vote.services";





const useVote = (
    id, fullname, vote, setAddVoteSuccess
) => {


 const time = Timestamp.fromDate(new Date())


  const _handleVote = async () => {
  const result =   voteServices.addVote(id, {fullname, vote, time});
  console.log(await result, 'result')
  setAddVoteSuccess(await result)
  };

  return { _handleVote };
};


export default useVote;
