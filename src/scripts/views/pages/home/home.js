import '../../components/hero';
import '../../components/categories';
import '../../components/pagination';
import Restaurants from './restaurants';

const Home = {
  async render() {
    return `
      <hero-section></hero-section>

      <div id="restaurants-section" class="container">
        <div class="row">
          <div class="col w100 jcc">
            <h3 class="tc">Explore Indonesian taste . . </h3>
          </div> 
        </div>
        <category-btns class="row category-container jccm"></category-btns>
        <div class="row card-container ais">
        </div>
        <pagination-btns class="row pagination-container jccm"></pagination-btns>
      </div>
    `;
  },

  async afterRender() {
    const showLoading = true;
    new Restaurants()
      .render(showLoading);
  },
};

export default Home;
