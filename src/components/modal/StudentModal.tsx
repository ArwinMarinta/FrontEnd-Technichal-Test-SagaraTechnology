import { useState } from "react";
import UploadIcon from "../../assets/upload.svg";
import { studentType } from "../../types/student";
import {
  addStudentToLocalStorage,
  editStudentInLocalStorage,
  getStudentsFromLocalStorage,
} from "../../utils/localStorage";

interface StudentModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  studentToEdit?: studentType;
  message: string;
  isEditing: boolean;
}

const StudentModal: React.FC<StudentModalProps> = ({
  modal,
  setModal,
  message,
  isEditing,
}) => {
  if (!modal) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [newStudent, setNewStudent] = useState<studentType>({
    id: 0,
    Profile: "https://randomuser.me/api/portraits/men/5.jpg",
    FullName: "",
    EmailAddress: "",
    PhoneNumber: "",
    Instance: "",
    CreatedAt: "",
  });

  const handleSave = () => {
    if (isEditing) {
      editStudentInLocalStorage(newStudent);
    } else {
      const id = Math.max(0, ...getStudentsFromLocalStorage().map((s) => s.id)) + 1;
      addStudentToLocalStorage({ ...newStudent, id });
    }
    setModal(false);
  };

  return (
    <>
      {/* Backdrop Blur */}
      <div
        id="backdrop"
        className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-[1px]"
        aria-hidden={!modal}
      />

      <div
        id="modal-container"
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
      >
        <div className="relative p-4 w-full max-w-3xl max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b border-GRAY10 rounded-t ">
              <h3 className="text-xl font-bold text-gray-900 ">{message}</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-6 h-6 ms-auto inline-flex justify-center items-center "
                onClick={() => setModal(false)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <form className="flex flex-col">
                <section id="section-1" className="flex flex-row justify-between gap-10">
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Full Name</label>
                    <input
                      type="text"
                      className="bg-white border mt-2 border-GRAY10  font-medium text-sm rounded-[5px] focus:ring-RED01 focus:border-RED01 block w-full px-2 py-2"
                      placeholder="Jhon"
                      required
                      value={newStudent.FullName}
                      onChange={(e) =>
                        setNewStudent({ ...newStudent, FullName: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Email</label>
                    <input
                      type="email"
                      className="bg-white border mt-2 border-GRAY10  font-medium text-sm rounded-[5px] focus:ring-RED01 focus:border-RED01 block w-full px-2 py-2"
                      placeholder="jhondoe@gmail.com"
                      required
                      value={newStudent.EmailAddress}
                      onChange={(e) =>
                        setNewStudent({ ...newStudent, EmailAddress: e.target.value })
                      }
                    />
                  </div>
                </section>
                <section
                  id="section-2"
                  className="flex flex-row mt-6 justify-between gap-10"
                >
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Phone Number</label>
                    <input
                      type="text"
                      className="bg-white border mt-2 border-GRAY10  font-medium text-sm rounded-[5px] focus:ring-RED01 focus:border-RED01 block w-full px-2 py-2"
                      placeholder="+62 8453875329"
                      required
                      value={newStudent.PhoneNumber}
                      onChange={(e) =>
                        setNewStudent({ ...newStudent, PhoneNumber: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Instance</label>
                    <input
                      type="text"
                      className="bg-white border mt-2 border-GRAY10  font-medium text-sm rounded-[5px] focus:ring-RED01 focus:border-RED01 block w-full px-2 py-2"
                      placeholder="Instance"
                      required
                      value={newStudent.Instance}
                      onChange={(e) =>
                        setNewStudent({ ...newStudent, Instance: e.target.value })
                      }
                    />
                  </div>
                </section>
                <section
                  id="section-3"
                  className="flex flex-row mt-6 justify-between gap-10"
                >
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Password</label>
                    <input
                      type="password"
                      className="bg-white border mt-2 border-GRAY10 text-[#9E9E9E] font-medium text-sm rounded-[5px] focus:ring-RED01 focus:border-RED01 block w-full px-2 py-2"
                      placeholder="Password"
                      required
                      // value={newStudent}
                      // onChange={(e) =>
                      //   setNewStudent({ ...newStudent, EmailAddress: e.target.value })
                      // }
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="font-bold">Re-type password</label>
                    <input
                      type="password"
                      className="bg-white border mt-2 border-GRAY10 text-[#9E9E9E] font-medium text-sm rounded-[5px] focus:ring-RED01 focus:border-RED01 block w-full px-2 py-2"
                      placeholder="Re-type password"
                      required
                    />
                  </div>
                </section>
                <section id="section-4" className="mt-6">
                  <label className="font-bold ">Add Image</label>
                  <div className="border border-GRAY10 py-5 flex justify-center items-center flex-col w-full">
                    <button>
                      <img src={UploadIcon} alt="..." loading="lazy" className="w-12" />
                    </button>
                    <p className="text-center mt-3 text-sm">
                      <a className="font-semibold">Click to upload</a> or drag and drop{" "}
                      <br />
                      SVG, PNG, JPG or GIF <br />
                      (max, 800 X 800px)
                    </p>
                  </div>
                </section>
              </form>
            </div>

            <div className="flex items-center justify-end p-4 md:p-4 border-t border-GRAY10 rounded-b">
              <button
                onClick={handleSave}
                type="button"
                className="text-white bg-RED01  focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentModal;
