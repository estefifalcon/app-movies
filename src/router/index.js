import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import MovieDetails from '../components/MovieDetails.vue';
import FavoriteMovies from '../components/FavoriteMovies.vue'; 

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails,
    props: true,
  },
  {
    path: '/favorites',  
    name: 'FavoriteMovies',
    component: FavoriteMovies,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
