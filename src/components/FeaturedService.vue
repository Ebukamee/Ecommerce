<template>
    <section class="featured">
        <div class="ft">
            <img src="../assets/free.png" alt="">
            <h4>Free Shipping</h4>
        </div>
        <div class="ft">
            <img src="../assets/online.png" alt="">
            <h4>Online order</h4>
        </div>
        <div class="ft">
            <img src="../assets/save.png" alt="">
            <h4>Save Money</h4>
        </div>
        <div class="ft">
            <img src="../assets/support.png" alt="">
            <h4>Great customer service</h4>
        </div>
    </section>
</template>

<style scoped>
  section {
    display: flex;
    margin: 10px 50px;
    justify-content: space-between;
    text-align: center;
    font-size: 14px;
  }
  .ft {
    border: 1px solid var(--light_green);
    padding: 20px;
    border-radius: 5px;
  }
  section .ft:nth-child(1) h4 {
    background-color: rgb(224,243,245);
  }
  section .ft:nth-child(2) h4 {
    background-color:rgb(245,232,240) ;
}
section .ft:nth-child(3) h4 {
    background-color: rgb(236,245,219);
}
section .ft:nth-child(4) h4 {
    background-color: rgb(243,230,220);
}
</style>