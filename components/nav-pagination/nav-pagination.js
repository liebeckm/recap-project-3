export function createPagination(
  nextButton,
  prevButton,
  pagination,
  currentPage,
  showCharacter
) {
  //numPages(maxPage, 5);
  pagination.textContent = currentPage + "/" + 42;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      //changePage(currentPage);
      showCharacter(currentPage);
    }
    pagination.textContent = currentPage + "/" + 42;
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < 42) {
      currentPage++;
      //changePage(currentPage);
      showCharacter(currentPage);
    }
    pagination.textContent = currentPage + "/" + 42;
  });

  return currentPage;
}

export function numPages(maxPage, coutOfPages) {
  return Math.ceil(maxPage / coutOfPages);
}
