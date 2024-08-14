import { useState } from "react";

export const useModal = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);

  const handleOpenModal = (modalType: boolean, id: number | null) => {
    setActiveModal(modalType);
    setId(id);
  };

  const handleCloseModal = () => {
    setActiveModal(false);
    setId(null);
  };

  return {
    activeModal,
    handleOpenModal,
    handleCloseModal,
    id,
  };
};
