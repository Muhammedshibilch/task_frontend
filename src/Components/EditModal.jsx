import React from 'react';

const EditModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 text-center">Education Details</h2>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">College Name</label>
              <input type="text" name="collegeName" className="border p-2 w-full rounded" />
            </div>

            <div>
              <label className="block font-medium">University/Board</label>
              <input type="text" name="universityBoard" className="border p-2 w-full rounded" />
            </div>

            <div>
              <label className="block font-medium">Qualification/Degree</label>
              <select name="qualificationDegree" className="border p-2 w-full rounded">
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
              <select name="course" className="border p-2 w-full rounded">
                <option value="">Select</option>
                <option value="M.Com">Master of Commerce</option>
                <option value="M.Sc">Master of Science</option>
                <option value="MA">Master of Arts</option>
                <option value="MCA">Master of Computer Applications</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Student Status</label>
              <select name="studentStatus" className="border p-2 w-full rounded">
                <option value="Pursuing">Pursuing</option>
                <option value="Graduated">Graduated</option>
                <option value="Drop Out">Drop Out</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Start Date</label>
              <input type="date" name="startDate" className="border p-2 w-full rounded" />
            </div>

            <div>
              <label className="block font-medium">End Date</label>
              <input type="date" name="endDate" className="border p-2 w-full rounded" />
            </div>

            <div className="md:col-span-2">
              <label className="block font-medium">Student CGPA</label>
              <input type="text" name="studentCGPA" className="border p-2 w-full rounded" />
            </div>

            <div className="flex items-center md:col-span-2">
              <input type="checkbox" name="highestQualification" className="mr-2" />
              <label className="font-medium">Is this your Highest Qualification?</label>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
