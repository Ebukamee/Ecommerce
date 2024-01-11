<template>
    <div class="hero">
        <h2>Super Value deals</h2>
        <h2 class="green">On all Clothes</h2>
        <p>Save more by shopping with us</p>
        <button @click="$router.push('/shop')">Shop now</button>
    </div>
</template>

<style>
@import url('../assets/index.css');
   .hero {
    background-image: url('../assets/model2.jpg');
    height: 500px;
    margin: 0;
    box-sizing: border-box;
    padding:100px 20%;
   }
   .hero p {
    font-size: 14px;
   }
   .green {
    color: var(--green);
   }
   .hero h2 {
    font-size: 30px;
    font-family: 'Poppins', sans-serif;
    margin: 0;

   }
   .hero button {
    background-image: url('../assets/button.png');
    background-color: transparent;
    color: var(--green);
    border: 0;
    padding: 14px 80px 14px 65px;
    background-repeat: no-repeat;
    cursor: pointer;
    font-weight: 500;
    font-size: 15px;
   }
   @media (max-width : 1000px) {
    .hero {
      background-image: url('../assets/model2 (1).jpg');
      height: 400px;
    }
   }
</style>