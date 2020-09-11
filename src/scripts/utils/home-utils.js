const trimParagraph = (par) => {
  let wordsLength = 50;
  let paragraph = par.split(' ');
  const parLength = paragraph.length;

  if (wordsLength > parLength) {
    wordsLength = parLength;
  }
  paragraph = paragraph.slice(0, wordsLength);
  paragraph = paragraph.join(' ');
  if (wordsLength < parLength) {
    paragraph += ' . . .';
  }
  return paragraph;
};

const sortBy = (data, category) => {
  switch (category) {
    case 'rating':
      data.sort((a, b) => b.rating - a.rating);
      break;
    case 'city':
      data.sort((a, b) => a.city.localeCompare(b.city));
      break;
    default:
      data.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }
  return data;
};

const clearActiveButtons = (buttons) => {
  buttons.forEach((btn) => {
    btn.classList.remove('active');
  });
};

const setActiveButton = (button) => {
  button.classList.add('active');
};

const scrollToRestaurantsSection = () => {
  const restaurantsSection = document.getElementById('restaurants-section');
  restaurantsSection.scrollIntoView();
};

export {
  trimParagraph,
  sortBy,
  clearActiveButtons,
  setActiveButton,
  scrollToRestaurantsSection,
};
