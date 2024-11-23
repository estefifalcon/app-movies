<template>
  <div>
    <h2>{{ movie.title }}</h2>
    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Poster" />
    <p>{{ movie.overview }}</p>
    <p><strong>Año de estreno:</strong> {{ movie.release_date }}</p>
    <button @click="addToFavorites">Agregar a favoritos</button>
    <router-link to="/">Volver al inicio</router-link> 
  </div>
</template>


<script>
export default {
  data() {
    return {
      movie: {},
    };
  },
  created() {
    const movieId = this.$route.params.id;
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e9b7d90693717f71df62fba98dd214b1`)
      .then(response => response.json())
      .then(data => {
        this.movie = data;
      })
      .catch(error => {
        console.error("Error fetching movie details:", error);
      });
  },
  methods: {
    addToFavorites() {
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const movieExists = favorites.some(fav => fav.id === this.movie.id);
      if (!movieExists) {
        favorites.push(this.movie);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Película agregada a favoritos');
      } else {
        alert('La película ya está en tus favoritos');
      }
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap');

h2 {
  font-size: 2.5em;
  color: #e91e63; 
  font-family: 'Quicksand', sans-serif;
  text-align: center;
}

img {
  width: 250px; 
  height: auto;
  margin: 0 auto 20px;
  display: block;
  border-radius: 8px;
}

button {
  background-color: #f06292; 
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  display: block;
  margin: 20px auto;
  font-family: 'Quicksand', sans-serif;
}

button:hover {
  background-color: #ec407a; 
}

strong {
  color: #e91e63;
}

a{
  font-family: 'Quicksand', sans-serif;
  color: #d81b60;
  text-align: center;
  font-weight: 600;
  font-size: 1.5em;          
}


</style>

