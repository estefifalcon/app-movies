<template>
  <div class="favorites-container">
    <h2>Películas Favoritas</h2>
    <div v-if="favorites.length === 0">
      <p>No tienes películas favoritas aún.</p>
    </div>
    <ul v-else>
      <li v-for="movie in favorites" :key="movie.id">
        <h3>{{ movie.title }}</h3>
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Poster" />
        <p>{{ movie.overview }}</p>
        <button @click="removeFromFavorites(movie.id)">Eliminar de favoritos</button>
      </li>
    </ul>
    <router-link to="/">Volver al inicio</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorites: [],
    };
  },
  created() {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    this.favorites = storedFavorites;
  },
  methods: {
    removeFromFavorites(movieId) {
      const updatedFavorites = this.favorites.filter(movie => movie.id !== movieId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      this.favorites = updatedFavorites;
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');

.favorites-container {
  font-family: 'Quicksand', sans-serif;
  background-color: #ffffff; 
  padding: 20px;
  border-radius: 10px;
}

h2, h3 {
  text-align: center;
  color: #ff66b2;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}

li {
  margin: 15px 0;
  padding: 15px;
  background-color: #ffff; 
  border-radius: 8px;
}

img {
  width: 200px;
  height: 300px;
  display: block;
  margin: 0 auto 10px;
  border-radius: 5px;
}

button {
  font-family: 'Quicksand', sans-serif;
  background-color: #ff3399; 
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
}

button:hover {
  background-color: #e02a84; 
}

a{
  font-family: 'Quicksand', sans-serif;
  color: #d81b60;
  text-align: center;
  font-weight: 600;
  font-size: 1.5em;          
}


</style>
