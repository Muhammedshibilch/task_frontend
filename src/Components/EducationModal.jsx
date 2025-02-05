import React, { useState } from 'react';
import { addEducationAPI } from '../services/allAPI'; 

const EducationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [collegeName, setCollegeName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [course, setCourse] = useState("");
  const [studentStatus, setStudentStatus] = useState("");
  const [startedDate, setStartedDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cgpa, setCgpa] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();
  
    const token = sessionStorage.getItem('token');
    console.log('Token:', token); 
  
    if (!token) {
      alert('No authorization token found');
      return;
    }
  
    const educationData = {
      collegeName,
      university,
      degree,
      course,
      studentStatus,
      startedDate,
      endDate,
      cgpa,
    };
  
    if (!studentStatus) {
      alert('Student Status is required');
      return;
    }
  
    console.log('Education Data:', educationData); 
  
    try {
      const response = await addEducationAPI(educationData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', 
        },
      });
  
      console.log('API Response:', response); 
  
      if (response.status === 200) {
        onClose();
        alert('Education details saved successfully!');
      } else {
        alert('Failed to save education details.');
      }
    } catch (error) {
      console.error('Error submitting education details:', error);
      if (error.response) {
        console.error('Server Response:', error.response.data); 
      }
      alert('Error submitting education details.');
    }
  };
  
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 text-center">Education Details</h2>

        <form onSubmit={handleSave}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">College Name</label>
              <input
                type="text"
                name="collegeName"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block font-medium">University/Board</label>
              <input
                type="text"
                name="university"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block font-medium">Qualification/Degree</label>
              <select
                name="Degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                className="border p-2 w-full rounded"
              >
                <option value="">Select</option>
                <option value="Diploma">Diploma</option>
                <option value="SSLC">SSLC</option>
                <option value="Doctorate">Doctorate</option>
                <option value="Plus Two">Plus Two</option>
                <option value="Post Graduation">Post Graduation</option>
                <option value="Under Graduation">Under Graduation</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Course</label>
              <select
                name="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="border p-2 w-full rounded"
              >
                <option value="">Select</option>
                <option value="Master of Commerce">Master of Commerce</option>
                <option value="Master of Science">Master of Science</option>
                <option value="Master of Arts">Master of Arts</option>
                <option value="Master of Computer">Master of Computer</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Student Status</label>
              <select
                name="studentStatus"
                value={studentStatus}
                onChange={(e) => setStudentStatus(e.target.value)}
                className="border p-2 w-full rounded"
              >
                <option value="">Select</option>
                <option value="Pursuing">Pursuing</option>
                <option value="Graduated">Graduated</option>
                <option value="Drop Out">Drop Out</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Started Date</label>
              <input
                type="text"
                name="startDate"
                value={startedDate}
                onChange={(e) => setStartedDate(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block font-medium">End Date</label>
              <input
                type="text"
                name="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block font-medium">Student CGPA</label>
              <input
                type="text"
                name="studentCGPA"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>

            <div className="flex items-center md:col-span-2">
              <input
                type="checkbox"
                name="highestQualification"
                className="mr-2"
              />
              <label className="font-medium">Is this your Highest Qualification?</label>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button onClick={onClose} type="button" className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationModal;
