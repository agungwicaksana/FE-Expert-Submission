/* eslint-disable */ 
import FavoriteRestaurantIdb from '../src/scripts/data/idb';
import FavoriteButton from '../src/scripts/views/pages/detail/favorite-button';

const FavoriteRestaurant = FavoriteRestaurantIdb;

const restaurantTestingData = {
  address: "Jln. Belimbing Timur no 27",
  categories: [
    {name: "Bali"},
    {name: "Jawa"}
  ],
  city: "Samarinda",
  consumerReviews: [
    { 
      date: "13 Juli 2019",
      name: "Widdy",
      review: "Tempatnya bagus namun menurut saya masih sedikit mahal."
    },
    {
      date: "13 November 2019",
      name: "Buchori",
      review: "Saya sangat suka menu malamnya!"
    }
  ],
  description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
  id: "kee0pyfx1mqkfmkhjr4",
  menus: [
    {
      drinks: [
        {name: "Sirup"},
        {name: "Minuman soda"}
      ],
      foods: [
        {name: "roket pane"},
        {name: "Sosis"}
      ] 
    }
  ],
  name: "Ampiran Kota",
  pictureId: "11",
  rating: 4.5
}

const addFavoriteButton = () => {
  document.body.innerHTML = '<button class="favorite-button">Button</button>';
}

const initButton = async (data) => {
  await new FavoriteButton().init({ restaurant: data, FavoriteRestaurant })
}

export {
  FavoriteRestaurant,
  restaurantTestingData,
  addFavoriteButton,
  initButton,
};
