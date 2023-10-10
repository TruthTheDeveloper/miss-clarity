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


 

  const _handleProfiles = async () => {
    const id = localStorage.getItem("uid");
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
