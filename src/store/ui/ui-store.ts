import { create } from "zustand";

interface State {
	isDialogOpen: boolean;
	openDialog: () => void;
	closeDialog: () => void;
	isSidebarOpen: boolean;
	openSidebar: () => void;
	closeSidebar: () => void;
}

export const useUIStore = create<State>()((set) => ({
	isDialogOpen: false,
	openDialog: () => set({ isDialogOpen: true }),
	closeDialog: () => set({ isDialogOpen: false }),
	isSidebarOpen: false,
	openSidebar: () => set({ isSidebarOpen: true }),
	closeSidebar: () => set({ isSidebarOpen: false }),
}));
