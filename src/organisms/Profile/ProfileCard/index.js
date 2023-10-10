"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/atoms/Input";
import Button from "@/atoms/Button";
import { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ClipLoader from "react-spinners/ClipLoader";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import useProfiles from "@/hooks/useProfiles";
import { uploadAFile } from "@/firebase/utils/uploadFile";
import { useRouter } from "next/navigation";

const inter = Inter({ weight: "700", subsets: ["latin"] });
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

const ProfileCard = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [country, setCountry] = useState("");
  const [tikTok, setTikTok] = useState("");
  const [region, setRegion] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFaceBook] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [valiadationError, setValidationError] = useState("");
  const [addUserSucess, setAddUserSucess] = useState(false);

  const router = useRouter();

  const { _handleProfiles } = useProfiles(
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
    setAddUserSucess
  );

  useEffect(() => {
    if (addUserSucess) {
      setLoading(false);
      router.push("/dashboard");
    } else {
      setLoading(false);
    }
  }, [addUserSucess, loading]);

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // setSelectedFile(file);
      alert(`You selected: ${file.name}`);
      // You can perform further actions with the selected file here
      const objectURL = URL.createObjectURL(file);
      setSelectedFile(objectURL);
      setImageURL(await uploadAFile(file));
    }
  };

  const handleFileSelectVideo = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      alert(`You selected: ${file.name}`);
      // You can perform further actions with the selected file here
    }
  };

  const submitHandler = () => {
    if (imageURL === null) {
      alert(`Profile picture is required`);
      setLoading(false);
      return;
    }
    setLoading(true);
    setValidationError("");
    if (
      firstName < 1 ||
      age < 1 ||
      lastName < 1 ||
      bio < 1 ||
      country < 1 ||
      region < 1 ||
      instagram < 1
    ) {
      setValidationError("Please make sure all required field are not empty");
      setLoading(false);
      return;
    }

    if (
      firstName !== "" &&
      age !== "" &&
      lastName !== "" &&
      bio !== "" &&
      country !== "" &&
      region !== "" &&
      instagram !== ""
    ) {
      _handleProfiles();
    }
  };
  return (
    <main className="relative">
      <div className="relative w-full h-[1370px] lg:h-[780px] ">
        <Image
          src={"/bg.png"}
          fill={true}
          // width={113}
          // height={139}
          objectFit="cover"
          alt="Picture of the author"
        />
      </div>
      <div
        className=" w-[380px] absolute bg-white md:w-[880px]    rounded-lg  "
        style={{
          transform: `translate(${-50}%, ${-50}%)`,
          top: "50%",
          left: "50%",
        }}
      >
        <div className="m-4">
          <h1 className={`text-center text-[24px] ${inter.className}`}>
            Profile
          </h1>
          <p className="text-[16px] text-center py-2 ">Complete your Profile</p>
          <p className="text-red text-sm text-center font-semibold">
            {valiadationError}
          </p>
        </div>
        <div className="md:flex">
          <div id="first div" className="md:basis-1/2  md:w-full">
            <div className="text-center my-2 text-[24px] md:text-[16px]">
              <h1>
                Add Image <span className="ml-1">*</span>
              </h1>
            </div>
            <div className="bg-grey h-[160px] w-[160px] mb-12 mx-auto border rounded-md">
              <div className="flex relative items-center justify-center h-full">
                <div
                  className="cursor-pointer "
                  onClick={() => {
                    // Trigger the hidden file input when the button is clicked
                    document.getElementById("fileInput").click();
                  }}
                >
                  {selectedFile ? (
                    <Image
                      src={selectedFile}
                      width={130}
                      height={130}
                      objectFit="cover"
                      alt="Picture of the author"
                      // style={{width:'100%', height:'100%'}}
                    />
                  ) : (
                    <Image
                      src={"/add-image.svg"}
                      width={40}
                      height={40}
                      objectFit="cover"
                      alt="Picture of the author"
                    />
                  )}
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={handleFileSelect}
                  />
                </div>
                <div className="absolute right-2 bottom-2 cursor-pointer ">
                  {!selectedFile && (
                    <Image
                      src={"/delete.svg"}
                      width={20}
                      height={20}
                      objectFit="cover"
                      alt="Picture of the author"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="text-center my-2 text-[24px] md:text-[16px]">
              <h1>Add Video</h1>
              <p>(optional)</p>
            </div>
            <div className="bg-grey h-[160px] w-[160px] mb-12 mx-auto border rounded-md">
              <div className="flex relative items-center justify-center h-full">
                <div
                // className="cursor-pointer "
                // onClick={() => {
                //   // Trigger the hidden file input when the button is clicked
                //   document.getElementById("fileInput").click();
                // }}
                >
                  <Image
                    src={"/add-image.svg"}
                    width={40}
                    height={40}
                    objectFit="cover"
                    alt="Picture of the author"
                  />
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    // onChange={handleFileSelectVideo}
                  />
                </div>
                <div className="absolute right-2 bottom-2 cursor-pointer">
                  <Image
                    src={"/delete.svg"}
                    width={20}
                    height={20}
                    objectFit="cover"
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            id="second div"
            className="w-[320px] md:pr-12 mx-auto md:grid md:grid-cols-2  md:w-full md:gap-5 md:mt-8"
          >
            <div id="row1">
              <div className="my-2 rounded-[10px]">
                <label className="text-[14px]">
                  First Name<span className="ml-1">*</span>
                </label>
                <div className="border rounded-[5px]">
                  <Input
                    value={firstName}
                    change={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-2 rounded-[10px]">
                <label className="text-[14px]">
                  Last Name<span className="ml-1">*</span>
                </label>
                <div className="border rounded-[5px]">
                  <Input
                    value={lastName}
                    change={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-2 rounded-[10px]">
                <label className="text-[14px]">
                  Country<span className="ml-1">*</span>
                </label>
                <div className="border rounded-[5px]">
                  <CountryDropdown
                    value={country}
                    classes="h-[35px] w-full outline-none"
                    onChange={(val) => setCountry(val)}
                  />
                </div>
              </div>
              <div className="my-2 rounded-[10px]">
                <label className="text-[14px]">
                  State/Region<span className="ml-1">*</span>
                </label>
                <div className="border  rounded-[5px]">
                  <RegionDropdown
                    country={country}
                    value={region}
                    classes="h-[35px] w-full outline-none"
                    onChange={(val) => setRegion(val)}
                  />
                </div>
              </div>
              <div className="my-2 rounded-[10px]">
                <label className="text-[14px]">
                  Phone Number<span className="ml-1">*</span>
                </label>
                <div className="rounded-[5px]">
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    className={
                      "h-[35px] p-3  w-full outline-none border pl-2 rounded-md"
                    }
                  />
                </div>
              </div>
            </div>

            <div id="row2" className="">
              <div className="my-2 rounded-[10px]">
                <label className="text-[14px]">
                  Age Range<span className="ml-1">*</span>
                </label>
                <div className="border rounded-[5px] ">
                  <Input
                    type="number"
                    value={age}
                    change={(e) => setAge(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-2 rounded-[10px]">
                <label className="text-[14px]">
                  Bio<span className="ml-1">*</span>
                </label>
                <div className="border rounded-[5px]">
                  <Input value={bio} change={(e) => setBio(e.target.value)} />
                </div>
              </div>
              <div className="my-2 rounded-[10px]">
                <label className="text-[14px]">TikTok</label>
                <div className="border rounded-[5px]">
                  <Input
                    value={tikTok}
                    change={(e) => setTikTok(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-2 rounded-[10px]">
                <label className="text-[14px]">
                  Instagram<span className="ml-1">*</span>
                </label>
                <div className="border rounded-[5px]">
                  <Input
                    value={instagram}
                    change={(e) => setInstagram(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-2 rounded-[10px]">
                <label className="text-[14px]">
                  Facebook<span className="ml-1">*</span>
                </label>
                <div className="border rounded-[5px]">
                  <Input
                    value={facebook}
                    change={(e) => setFaceBook(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {loading ? (
              <div className="my-6 md:my-0 col-span-2 md:h-[32px] text-white bg-pink text-[14px] py-1 cursor-pointer    rounded-md ">
                <ClipLoader
                  color={"#E985A1"}
                  loading={loading}
                  cssOverride={override}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) : (
              <div className="my-6 md:my-0 col-span-2 md:h-[32px] ">
                <Button
                  label={"Submit"}
                  color={
                    "text-white bg-pink text-[14px] py-1 cursor-pointer    rounded-md"
                  }
                  onSubmit={submitHandler}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileCard;
