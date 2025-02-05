import React, { useEffect, useState } from "react";
import { updateUserAPI } from "../services/allAPI";

const ProfileModal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [parentName, setParentName] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUsername(JSON.parse(sessionStorage.getItem("user")).username);
      setNumber(JSON.parse(sessionStorage.getItem("user")).number);
      setEmail(JSON.parse(sessionStorage.getItem("user")).email);
    }
  }, []);

  const handleSubmit = async () => {
    const updatedUser = {
      username,
      email,
      number,
      dob,
      gender,
      aadhar,
      address,
      state,
      district,
      pincode,
      parentName,
    };

    const token = sessionStorage.getItem("token"); 

    try {
      const response = await updateUserAPI(updatedUser, {
        Authorization: `Bearer ${token}`,
      });

      console.log("Profile updated:", response);
      onSave(response);
      onClose(); 
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] md:w-[700px] lg:w-[800px] max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Basic Information</h2>
          <button onClick={onClose} className="text-gray-500 text-lg">✖</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="block text-sm font-medium">Username *</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium">Date of Birth *</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium">Gender *</label>
            <div className="flex space-x-3 mt-1">
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={() => setGender("Male")}
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
                />
                <span>Female</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="gender"
                  value="Non-Binary"
                  checked={gender === "Non-Binary"}
                  onChange={() => setGender("Non-Binary")}
                />
                <span>Non-Binary</span>
              </label>
            </div>
          </div>

          <div className="col-span-1 relative">
            <label className="block text-sm font-medium">Mobile *</label>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div className="col-span-1 relative">
            <label className="block text-sm font-medium">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div className="col-span-1 relative">
            <label className="block text-sm font-medium">Aadhar *</label>
            <input
              type="text"
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium">Address *</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium">State *</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium">District *</label>
            <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium">Pincode *</label>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium">Parent / Guardian Name</label>
            <input
              type="text"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit} 
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
