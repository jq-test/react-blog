export const addDraft = (draft) => {
  const existingDrafts = JSON.parse(localStorage.getItem("drafts")) || [];
  const updatedDrafts = [...existingDrafts, draft];
  localStorage.setItem("drafts", JSON.stringify(updatedDrafts));
};

