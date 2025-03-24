export const selectCampers = (state) => state.campers.items;
export const selectTotal = (state) => state.campers.total;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.fetchError;
export const selectHasCampers = (state) => state.campers.items.length > 0;
export const selectCurrentPage = (state) => state.campers.currentPage;
export const selectCurrentCamper = (state) => state.campers.currentCamper;
