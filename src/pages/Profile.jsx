import React, { useEffect, useState } from 'react';
import user from '../assets/user.jpg';
import ProfileModal from "../Components/ProfileModal";
import pay from "../assets/pay.png";
import EducationModal from '../Components/EducationModal';
import EditModal from '../Components/EditModal';
import { Pencil, Trash2 } from "lucide-react";
import { getUserProfileAPI } from '../services/allAPI';


const Profile = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [isEducationModalOpen, setIsEducationModalOpen] = useState(false); 
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: '',
    number: '',
    email: '',
    dob: '',
    aadhar: '',
    address: '',
    gender: ''
  });

  const fetchUserData = async () => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await getUserProfileAPI({
        Authorization: `Bearer ${token}`,
      });

      if (response && response.data) {
        setUserDetails({
          username: response.data.username,
          number: response.data.number,
          email: response.data.email,
          dob: response.data.dob,
          aadhar: response.data.aadhar,
          address: response.data.address,
          gender: response.data.gender,
        });
      } else {
        console.error('No data received');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSave = (updatedData) => {
    sessionStorage.setItem("user", JSON.stringify(updatedData));

    setUserDetails({
      username: updatedData.username,
      number: updatedData.number,
      email: updatedData.email,
      dob: updatedData.dob,
      aadhar: updatedData.aadhar,
      address: updatedData.address,
      gender: updatedData.gender
    });

    fetchUserData();

    setIsProfileModalOpen(false);  
  };

    return (
    <>
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <div className="relative">
              <label className="relative block w-full h-full cursor-pointer">
                <input type="file" className="hidden" />
                <img 
                  src={user} 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full mx-auto border-4 border-white"
                />
              </label>
              <div className="absolute top-0 right-0 bg-white p-1 rounded-full shadow-md">
                🔒
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{userDetails.username}</h2>
            </div>
            <div className="mt-2">
              <div className="relative w-full bg-gray-200 rounded-full h-2">
                <div className="absolute top-0 left-0 bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">60%</p>
            </div>
            <div className="mt-4 text-left">
              <p className="flex items-center gap-2"><span>📞</span> {userDetails.number} ✅</p>
              <p className="flex items-center gap-2"><span>✉️</span> {userDetails.email} ⚠️</p>
            </div>
            <div className="mt-3">
              <a href="#" onClick={() => setIsProfileModalOpen(true)} className="text-blue-500 underline">Edit/Update Profile</a>
            </div>
            <div className="mt-4 bg-orange-100 p-3 rounded-lg text-left">
              <p className="font-semibold text-orange-600">📌 My Profile</p>
              <p className="mt-2">💳 Payments</p>
              <p className="mt-2">📄 Application Status</p>
            </div>
            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full">Logout</button>
            <p className="text-gray-400 text-xs mt-2">Last updated on 10 Oct 2024</p>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Basic Information</h3>
            <button onClick={() => setIsProfileModalOpen(true)} className="float-right px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Update</button>
          </div>
          <div className='border border-gray-300 w-full mt-3 rounded p-4'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
              <div className="mb-3 md:mb-0">
                <h3 className='text-lg font-bold'>Username</h3>
                <h3 className='text-lg'>{userDetails.username}</h3>
              </div>
              <div className="mb-3 md:mb-0">
                <h3 className='text-lg font-bold'>Date of Birth</h3>
                <h3 className='text-lg'>{userDetails.dob ? userDetails.dob.slice(0, 10) : "N/A"}</h3>
                </div>
              <div>
                <h3 className='text-lg font-bold'>Gender</h3>
                <h3 className="text-lg">{userDetails.gender}</h3>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center mt-3'>
              <div className="mb-3 md:mb-0">
                <h3 className="text-lg font-bold">Mobile</h3>
                <h3 className="text-lg">{userDetails.number}</h3>
              </div>
              <div>
                <h3 className="text-lg font-bold">Email</h3>
                <h3 className="text-lg">{userDetails.email}</h3>
              </div>
            </div>
            <div className='mt-3'>
              <h3 className="text-lg font-bold">Aadhar</h3>
              <h3 className="text-lg">{userDetails.aadhar}</h3>
            </div>
            <div className='mt-3'>
              <h3 className="text-lg font-bold">Address</h3>
              <h3 className="text-lg">{userDetails.address}</h3>
            </div>
          </div>

          <div className="bg-yellow-200 w-full p-4 mt-3 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-20 md:w-24">
                <img src={pay} alt="Payment Icon" className="w-full" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-black text-lg font-semibold">Payment Pending</h2>
                <h3 className="text-gray-800 text-sm">
                  Registration fee <strong>500 rupees</strong> pending. <br className="hidden md:block" />
                  Pay now and get access to all services.
                </h3>
              </div>

              <div>
                <button className="bg-red-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-red-700 transition-all">
                  Pay Now
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-4">
            <h3 className="font-bold text-lg">Education</h3>
            <button  
                onClick={() => setIsEducationModalOpen(true)}  
                className="mt-2 md:mt-0 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-full md:w-auto"
            >
                Add Education
            </button>
          </div>

          <div className="border border-gray-300 w-full mt-3 rounded p-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <h4 className="text-black text-base md:text-lg font-semibold">
                    Masters of Business Administration (MBA)
                </h4>
                <div className="flex gap-2">
                    <Pencil 
                        className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-700"
                        onClick={() => setIsEditModalOpen(true)}
                    />
                    <Trash2 
                        className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-700"
                    />
                </div>
            </div>
            <h5 className="text-gray-600 text-sm md:text-base">XYZ University, Kannur, Kerala</h5>
            <h5 className="text-gray-600 text-sm md:text-base">2018-2020</h5>
          </div>
        </div>

        <div className="col-lg-3 hidden md:block">
            <div className="bg-white shadow-md rounded-lg p-4">
                <ul className="space-y-2">
                    <li className="flex items-center text-purple-600 font-semibold">
                        <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
                        Basic Information
                    </li>
                    {[ "Education", "Resume", "Career Objective", "Key Skills", "Portfolio", "Work Experience", "Preferences", "Documents/Certificate" ]
                      .map((item, index) => (
                        <li key={index} className="flex items-center text-gray-500 cursor-pointer hover:text-purple-600">
                            <span className="w-3 h-3 bg-gray-300 rounded-full mr-2"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="col-lg-1"></div>
      </div>

      <ProfileModal onSave={handleSave} isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
              <EducationModal isOpen={isEducationModalOpen} onClose={() => setIsEducationModalOpen(false)} />
      <EditModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
    </>
  );
};

export default Profile;
