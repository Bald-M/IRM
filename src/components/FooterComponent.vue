<template>
  <footer>

    <div>
      <img src="@/assets/Te Pukenga Logo.svg" class="logo" />
    </div>

    <nav>
      <img src="@/assets/icon_facebook.svg" />
      <img src="@/assets/icon_instagram.svg" />
      <img src="@/assets/icon_twitter.svg" />
    </nav>

  </footer>
</template>

<style scoped>
footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: #333333;
  padding: 20px 30px;
}

div {
  display: flex;
  align-items: center;
}

nav {
  display: flex;
  align-items: center;
}

nav>img {
  height: 20px;
  width: 20px;
  margin: 0 8px;
  cursor: pointer;
}

.logo {
  width: 200px;
  height: 40px;
}
</style>