import React from "react";
import { useStore } from "../hooks/store";
import DappsModal from "../components/DappsModal";

const modals = {
  DappsModal: DappsModal,
};

export function ModalContainer() {
  const modal = useStore((store) => store.modal);
  const Modal = modals[modal];

  if (!Modal) return null;

  return <Modal />;
}
