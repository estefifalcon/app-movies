<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f8f9fa;
  color: #343a40;
  line-height: 1.6;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1, h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #2c3e50;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}


ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

li {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

li:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

li img {
  border-bottom: 1px solid #ddd;
}

li div {
  padding: 15px;
}

li h3 {
  font-size: 1.2em;
  color: #2c3e50;
  margin-bottom: 10px;
}

li p {
  font-size: 0.9em;
  color: #555;
  margin-bottom: 15px;
}

input[type="text"], select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus, select:focus {
  outline: none;
}

p {
  font-size: 1rem;
  color: #555;
  text-align: center;
}

</style>