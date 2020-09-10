const Detail = {
  async render() {
    return `
    <h1>Detail</h1>
    `;
  },

  async afterRender() {
    console.log('after render Detail');
  },
};

export default Detail;
