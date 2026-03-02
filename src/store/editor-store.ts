import { create } from 'zustand';

export type EditorView = 'cards' | 'timeline' | 'prompts';

interface EditorState {
  selectedShotId: string | null;
  activeView: EditorView;
  showExportModal: boolean;
  showCreateModal: boolean;
  showImportPanel: boolean;
  setSelectedShotId: (id: string | null) => void;
  setActiveView: (view: EditorView) => void;
  setShowExportModal: (show: boolean) => void;
  setShowCreateModal: (show: boolean) => void;
  setShowImportPanel: (show: boolean) => void;
}

export const useEditorStore = create<EditorState>()((set) => ({
  selectedShotId: null,
  activeView: 'cards',
  showExportModal: false,
  showCreateModal: false,
  showImportPanel: false,
  setSelectedShotId: (selectedShotId) => set({ selectedShotId }),
  setActiveView: (activeView) => set({ activeView }),
  setShowExportModal: (showExportModal) => set({ showExportModal }),
  setShowCreateModal: (showCreateModal) => set({ showCreateModal }),
  setShowImportPanel: (showImportPanel) => set({ showImportPanel }),
}));
