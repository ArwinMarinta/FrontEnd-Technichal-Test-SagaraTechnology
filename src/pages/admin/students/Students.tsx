import { useState, useEffect } from "react";
import Sidebar from "../../../components/navigation/sidebar/Sidebar";
import NavAdmin from "../../../components/navigation/navbar/NavAdmin";
import FilterIcon from "../../../assets/dashboard/filter.svg";
import AddIcon from "../../../assets/dashboard/add-icon.svg";
import SettingIcon from "../../../assets/dashboard/setting-icon.svg";
import SearchIcon from "../../../assets/dashboard/search-icon.svg";
import { useModal } from "../../../hooks/useModal";
import ModalStudent from "../../../components/modal/StudentModal";
import Student from "../../../data/student.json";
import DeleteIcon from "../../../assets/dashboard/delete-icon.svg";
import EditeIcon from "../../../assets/dashboard/edite-icon.svg";
// import { studentType } from "../../../types/student";
import Pagination from "../../../components/pagination/Pagination";
import {
  saveStudentsToLocalStorage,
  getStudentsFromLocalStorage,
  deleteStudentFromLocalStorage,
} from "../../../utils/localStorage";
import { studentType } from "../../../types/student";

const Students = () => {
  // const [idDiskusi, setIdDiskusi] = useState<number | null>(null);
  const [typeModal, setTypeModal] = useState<string>("");
  const [students, setStudents] = useState<studentType[]>(getStudentsFromLocalStorage());
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { activeModal, handleOpenModal, handleCloseModal } = useModal();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 7; // Example total pages
  const [typeEditing, setTypeEditing] = useState<string>("");
  const [idUser, setIdUser] = useState<number | null>(null);

  // console.log(idUser);
  console.log(typeEditing);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleModal = (userId: number | null, type: string) => {
    if (type === "add") {
      setTypeModal("Add New Student ");
      handleOpenModal(true, null);
      setTypeEditing("add");
    } else if (type === "edit") {
      setIdUser(userId);
      setTypeModal("Edit Data Student");
      handleOpenModal(true, userId);
      setTypeEditing("edit");
    }
  };

  const filteredStudents = students.filter((data) =>
    data["FullName"].toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Mengambil data dari localStorage ketika komponen di-mount
    const storedStudents = getStudentsFromLocalStorage();
    setStudents(storedStudents);
  }, []);

  useEffect(() => {
    saveStudentsToLocalStorage(Student);
  }, [students]);

  const handleDelete = (id: number) => {
    deleteStudentFromLocalStorage(id);
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
  };

  const refreshStudents = () => {
    const updatedStudents = getStudentsFromLocalStorage();
    setStudents(updatedStudents);
  };

  return (
    <main className="flex justify-center bg-WHITE01">
      <>
        <div className="lg:w-[20%]">
          <Sidebar />
        </div>
      </>
      <div className="w-[100%] lg:w-[80%] ">
        <>
          <NavAdmin />
          <div className="flex justify-center">
            <div className="container py-14">
              <section id="section-1" className="">
                <h1 className="text-GRAY05 font-bold text-2xl">Data Student</h1>
              </section>
              <section
                id="section-2"
                className="flex lg:flex-row flex-col  justify-between mt-10"
              >
                <div className="flex flex-row gap-4">
                  <button className="flex flex-row shadow bg-white border-[1px] border-GRAY07 px-3 py-2 justify-center items-center gap-2 rounded-[4px]">
                    <img src={FilterIcon} alt=".." loading="lazy" />
                    <span className="font-bold text-sm text-GRAY08">Filters</span>
                  </button>
                  <button
                    type="button"
                    className="flex flex-row shadow bg-RED01 border-[1px] border-GRAY07 px-3 py-2 justify-center items-center gap-2 rounded-[4px]"
                    onClick={() => handleModal(null, "add")}
                  >
                    <img src={AddIcon} alt=".." loading="lazy" />
                    <span className="text-white font-bold text-sm">Add User</span>
                  </button>
                  <ModalStudent
                    modal={activeModal}
                    setModal={handleCloseModal}
                    message={typeModal}
                    isEditing={typeEditing}
                    onSave={refreshStudents}
                    id={idUser}
                  />
                </div>
                <div className="flex flex-row gap-2 mt-5 lg:mt-0">
                  <form className="flex items-center w-full lg:max-w-lg mx-auto">
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <img src={SearchIcon} alt="search" loading="lazy" />
                      </div>
                      <input
                        type="text"
                        id="search"
                        className="bg-white border border-GRAY07 text-GRAY09 shadow font-bold text-sm rounded-[4px] focus:ring-RED01 focus:border-RED01 block w-full ps-10 p-2.5"
                        placeholder="Search"
                        required
                        value={searchQuery} // Bind state dengan input
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </form>
                  <button className="bg-white p-2 rounded-[4px] shadow border-[1px] border-GRAY07">
                    <img src={SettingIcon} alt="..." loading="lazy" />
                  </button>
                </div>
              </section>
              <section id="section-3" className="mt-8">
                <div className=" overflow-x-auto w-full">
                  <table className="w-full text-sm text-left rtl:text-right rounded-lg border">
                    <thead className="text-xs  text-GRAY11 bg-WHITE02 border-b-[1px]">
                      <tr>
                        <th scope="col" className="px-2 pl-4 py-4 ]">
                          Profile
                        </th>
                        <th scope="col" className="px-2 py-4">
                          Full Name
                        </th>
                        <th scope="col" className="px-2 py-4">
                          Email Address
                        </th>
                        <th scope="col" className="px-2 py-4">
                          Phone Number
                        </th>
                        <th scope="col" className="px-2 py-4">
                          Instance
                        </th>
                        <th scope="col" className="px-2 py-3">
                          Created At
                        </th>
                        <th scope="col" className="px-2 pr-4 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((data) => (
                        <tr key={data.id} className="bg-white border-b">
                          <td className="px-2 pl-4 py-4">
                            <img
                              src={data.Profile}
                              alt="student"
                              loading="lazy"
                              className="w-14 rounded-full"
                            />
                          </td>
                          <td className="px-2 py-4">{data["FullName"]}</td>
                          <td className="px-2 py-4">{data["EmailAddress"]}</td>
                          <td className="px-2 py-4">{data["PhoneNumber"]}</td>
                          <td className="px-2 py-4">{data["Instance"]}</td>
                          <td className="px-2 py-4">{data["CreatedAt"]}</td>
                          <td className="px-2 pr-4 py-4  whitespace-nowrap">
                            <div className="flex flex-row gap-3 h-full items-center">
                              <button
                                onClick={() => handleDelete(data.id)}
                                className="flex items-center h-full "
                              >
                                <img src={DeleteIcon} alt="Delete" loading="lazy" />
                              </button>
                              <button onClick={() => handleModal(data.id, "edit")}>
                                <img src={EditeIcon} alt="edite" loading="lazy" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                </div>
              </section>
            </div>
          </div>
        </>
      </div>
    </main>
  );
};

export default Students;
