import React, { useState } from "react";
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

const Students = () => {
  // const [idDiskusi, setIdDiskusi] = useState<number | null>(null);
  const [typeModal, setTypeModal] = useState<string>("");

  const { activeModal, handleOpenModal, handleCloseModal } = useModal();

  const handleModal = (userId: number | null, type: string) => {
    if (type === "add") {
      setTypeModal("Add New Student ");
      handleOpenModal(true, null);
    } else if (type === "edit") {
      setTypeModal("Edit Data Student");
      handleOpenModal(true, userId);
    }
  };

  return (
    <main className="flex flex-row w-full h-full bg-WHITE01">
      <>
        <Sidebar />
      </>
      <div className="flex flex-col w-full items-center">
        <>
          <NavAdmin />
          <div className="container py-14">
            <section id="section-1" className="">
              <h1 className="text-GRAY05 font-bold text-2xl">Data Student</h1>
            </section>
            <section id="section-2" className="flex flex-row justify-between mt-10">
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
                />
              </div>
              <div className="flex flex-row gap-2">
                <form className="flex items-center max-w-lg mx-auto">
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
                    />
                  </div>
                </form>
                <button className="bg-white p-2 rounded-[4px] shadow border-[1px] border-GRAY07">
                  <img src={SettingIcon} alt="..." loading="lazy" />
                </button>
              </div>
            </section>
            <section id="section-3" className="mt-8">
              <div className=" overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right rounded-lg border">
                  <thead className="text-xs  text-GRAY11 bg-WHITE02 border-b-[1px] ">
                    <tr>
                      <th scope="col" className="px-6 py-4 rou">
                        Profile
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Full Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Email Address
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Instance
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Created At
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Student.map((data) => (
                      <tr key={data.id} className="bg-white border-b">
                        <td className="px-6 py-4">
                          <img
                            src={data.Profile}
                            alt="student"
                            loading="lazy"
                            className="w-14 rounded-full"
                          />
                        </td>
                        <td className="px-6 py-4">{data["Full Name"]}</td>
                        <td className="px-6 py-4">{data["Email Address"]}</td>
                        <td className="px-6 py-4">{data["Phone Number"]}</td>
                        <td className="px-6 py-4">{data["Instance"]}</td>
                        <td className="px-6 py-4">{data["Created At"]}</td>
                        <td className="px-6 py-4  whitespace-nowrap">
                          <div className="flex flex-row gap-3 h-full items-center">
                            <button className="flex items-center h-full ">
                              <img src={DeleteIcon} alt="Delete" loading="lazy" />
                            </button>
                            <button onClick={() => handleModal(data.id, "edit")}>
                              <img src={EditeIcon} alt="Delete" loading="lazy" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </>
      </div>
    </main>
  );
};

export default Students;
