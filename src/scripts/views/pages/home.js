const Home = {
  async render() {
    return `
    <h1>HOME</h1>
    `;
  },

  async afterRender() {
    console.log('after render home');
  },
};

export default Home;
