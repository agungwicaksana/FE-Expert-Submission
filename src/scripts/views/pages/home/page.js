import { paginationButton } from '../../templates/template-creator';

const Page = {
  getPagedData({ data, dataPerPage, activePage }) {
    const sliceStart = (dataPerPage * activePage) - dataPerPage;
    const sliceEnd = sliceStart + dataPerPage;
    const paged = data.slice(sliceStart, sliceEnd);
    return paged;
  },

  getNumberOfPages({ data, dataPerPage }) {
    return Math.ceil(data.length / dataPerPage);
  },

  renderButtons(numberOfPages) {
    const container = document.getElementById('pagination');
    let buttons = '';
    for (let i = 0; i < numberOfPages; i += 1) {
      const active = i === 0;
      buttons += paginationButton(i + 1, active);
    }
    container.innerHTML = buttons;
  },
};

export default Page;
