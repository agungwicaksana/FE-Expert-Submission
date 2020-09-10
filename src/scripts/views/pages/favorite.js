const Favorite = {
  async render() {
    return `
    <h1>Favorite</h1>
    `;
  },

  async afterRender() {
    console.log('after render Favorite');
  },
};

export default Favorite;
