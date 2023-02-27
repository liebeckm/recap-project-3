export function createPagination(
  nextButton,
  prevButton,
  pagination,
  maxPage,
  currentPage
) {
  numPages(maxPage, 5);

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      //changePage(currentPage);
      console.log(currentPage);
    }
    pagination.textContent = currentPage + "/" + maxPage;
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < numPages(maxPage, 5)) {
      currentPage++;
      //changePage(currentPage);
      console.log(currentPage);
    }
    pagination.textContent = currentPage + "/" + maxPage;
  });

  function numPages(maxPage, pageCount) {
    return Math.ceil(maxPage / pageCount);
  }

  return currentPage;
}
