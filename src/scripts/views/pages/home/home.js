import '../../components/hero';
import Restaurants from './restaurants';

const Home = {
  async render() {
    return `
      <hero-section></hero-section>

      <div class="container">
        <div class="row">
          <div class="col w100 jcc">
            <h3 class="tc">Explore Indonesian taste . . </h3>
          </div> 
        </div>
        <div class="row category-container jccm">
          <div class="col w100 wm55">
            <p class="label">Sort by :</p>
          </div>
          <div class="col w100 wm55 jcb">
            <button class="ctg-button active" aria-label="Sort by name">Name</button>
            <button class="ctg-button" aria-label="Sort by rating">Rating</button>
            <button class="ctg-button" aria-label="Sort by city">City</button>
          </div>
        </div>
        <div class="row card-container ais">
        </div>
      </div>
    `;
  },

  async afterRender() {
    new Restaurants()
      .render();
  },
};

export default Home;
