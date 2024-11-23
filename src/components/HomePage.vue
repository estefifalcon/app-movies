<template>
  <div class="home-page">
    <h1>Buscar Películas</h1>
    <input 
      v-model="searchQuery" 
      @input="searchMovies" 
      type="text" 
      placeholder="Buscar por título..." 
      class="search-input"
    />

    <select v-model="selectedGenre" @change="searchMovies">
      <option value="">Seleccionar Género</option>
      <option v-for="genre in genres" :key="genre.id" :value="genre.id">
        {{ genre.name }}
      </option>
    </select>
    

    <select v-model="selectedRating" @change="searchMovies">
      <option value="">Seleccionar Clasificación por Edad</option>
      <option value="G">G (General)</option>
      <option value="PG">PG (Parental Guidance)</option>
      <option value="PG-13">PG-13 (No apta para menores de 13 años)</option>
      <option value="R">R (Restringida)</option>
      <option value="NC-17">NC-17 (No apta para menores de 17 años)</option>
    </select>

<div class="center-container">
  <router-link to="/favorites">Ver favoritos</router-link>
</div>

    <ul v-if="filteredMovies.length > 0">
      <li v-for="movie in filteredMovies" :key="movie.id">
        <router-link :to="'/movie/' + movie.id">
          <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
          <div>
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.release_date }}</p>
          </div>
        </router-link>
      </li>
    </ul>
    <p v-else>No se encontraron resultados.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedGenre: '',
      selectedRating: '',
      allMovies: [],
      filteredMovies: [],
      genres: []  
    };
  },
  created() {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=e9b7d90693717f71df62fba98dd214b1')
      .then(response => response.json())
      .then(data => {
        this.genres = data.genres;
      })
      .catch(error => {
        console.error("Error fetching genres:", error);
      });

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=e9b7d90693717f71df62fba98dd214b1')
      .then(response => response.json())
      .then(data => {
        this.allMovies = data.results;
        this.filteredMovies = data.results;
      })
      .catch(error => {
        console.error("Error fetching popular movies:", error);
      });
  },
  methods: {
    searchMovies() {
      console.log("Filtrando películas...");
      console.log("Título: ", this.searchQuery);
      console.log("Género seleccionado: ", this.selectedGenre);
      console.log("Clasificación por edad seleccionada: ", this.selectedRating);

      this.filteredMovies = this.allMovies.filter(movie => {
        const matchesTitle = movie.title.toLowerCase().includes(this.searchQuery.toLowerCase());

        const matchesGenre = this.selectedGenre ? movie.genre_ids.includes(parseInt(this.selectedGenre)) : true;

        const matchesRating = this.selectedRating ? this.checkRating(movie) : true;

        return matchesTitle && matchesGenre && matchesRating;
      });

      console.log("Películas filtradas: ", this.filteredMovies);
    },
    checkRating(movie) {
  return movie.adult ? (this.selectedRating === 'R' || this.selectedRating === 'NC-17') : true;
}

  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap');

.home-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fce4ec; 
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Quicksand', sans-serif;
}

h1 {
  font-size: 2.5em;
  color: #e91e63;
  margin-bottom: 20px;
  text-align: center;
}

.search-input,
select {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #f8bbd0; 
  background-color: #ffffff;
  font-family: 'Quicksand', sans-serif;
}

.search-input:focus,
select:focus {
  border-color: #ec407a; 
  outline: none;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

li:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}

button {
  background-color: #f06292; 
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Quicksand', sans-serif;
  transition: background-color 0.3s ease;
  display: block;
  width: 100%;
}

button:hover {
  background-color: #ec407a; 
}

select {
  font-family: 'Quicksand', sans-serif;
}

a {
  text-align: center;
  color: #ec407a; 
  text-decoration: none;
  font-family: 'Quicksand', sans-serif;
}

a:hover {
  color: #d81b60; 
}

.center-container {
  text-align: center;
  font-weight: 600;
  font-size: 1.5em;          
  margin: 15px;
}


</style>
