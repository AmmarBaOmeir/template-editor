export const createToolbarSlice = (set) => {
  return {
    toolbarTab: "variables", // Default tab is 'variables' of 2 options: 'elements' and 'variables'
    setToolbarTab: (toolbarTab) => set({ toolbarTab }),
    templates: [],
    setTemplates: (templates) => set({ templates }),
  };
};
