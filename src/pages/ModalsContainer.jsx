import React from "react";
import { useStore } from "../hooks/store";
import DappsModal from "../components/DappsModal";
import NftModal from "../components/NftModal";

const modals = {
  DappsModal: DappsModal,
  NftModal: NftModal,
};

export function ModalContainer() {
  const modal = useStore((store) => store.modal);
  const Modal = modals[modal];

  if (!Modal) return null;

  return <Modal />;
}
