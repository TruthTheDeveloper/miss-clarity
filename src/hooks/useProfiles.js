import profileServices from "@/firebase/services/profile.services";


const useProfiles = (
  firstName,
  age,
  lastName,
  bio,
  country,
  tikTok,
  region,
  instagram,
  facebook,
  imageURL,
  phoneNumber,
  setAddUserSuccess
) => {


 let id = null

  const _handleProfiles = async () => {
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      id = localStorage.getItem("uid")
    }
  const result =   profileServices.addProfile(id, {
      userId: id,
      firstName,
      age,
      lastName,
      bio,
      country,
      tikTok,
      region,
      instagram,
      facebook,
      imageURL,
      phoneNumber,
    });
    setAddUserSuccess(await result)
  };

  return { _handleProfiles };
};


export default useProfiles;
