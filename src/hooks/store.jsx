import create from "zustand";

export const useStore = create((set, get) => ({
  modal: "",
  setModal: (modalName) => {
    set((store) => ({
      modal: modalName,
    }));
  },

  currentUser: {},
  setCurrentUser: (user) => {
    set((store) => ({
      currentUser: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        walledAddress: user.walledAddress,
        id: user.id,
      },
    }));
  },

  currentNft: {},
  setCurrentNft: (nft) => {
    set((store) => ({
      currentNft: nft,
    }));
  },
}));
