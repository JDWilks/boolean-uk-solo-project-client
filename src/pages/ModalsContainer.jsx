import React from "react";
import { useStore } from "../hooks/store";
import DappsModal from "../components/DappsModal";
import NftModal from "../components/NftModal";
import LoginModal from "../components/LoginModal";
import SellModal from "../components/SellModal";
import CreateNftModal from "../components/CreateNftModal";
import AmendNftModal from "../components/AmendNftModal";

const modals = {
  DappsModal: DappsModal,
  NftModal: NftModal,
  LoginModal: LoginModal,
  SellModal: SellModal,
  CreateNftModal: CreateNftModal,
  AmendNftModal: AmendNftModal,
};

export function ModalContainer() {
  const modal = useStore((store) => store.modal);
  const Modal = modals[modal];

  if (!Modal) return null;

  return <Modal />;
}
