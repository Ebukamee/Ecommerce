<template>
    <div class="loader">
        <div class="spin">
        <li style="--delay: -1.4s; --color:#ffff00"></li>
        <li style="--delay: -1.2s; --color:#76ff03"></li>
        <li style="--delay: -1s; --color:#f06292"></li>
        <li style="--delay: -0.8s; --color:#4fc3f7"></li>
        <li style="--delay: -0.4s; --color:#f57c00"></li>
        <li style="--delay: -0.2s; --color:#673ab7"></li>
        </div>
    </div>
</template>

<style scoped>
.loader {
    margin: 200px 0;
}
.logo {
    color: var(--green);
    text-align: center;
  }
  .spin{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    list-style: none;
    margin: auto;
    width: 80%;
    max-width: 400px;
  }
  .spin li {
    width: 40px;
    height: 40px;
    background-color: var(--color);
    border-radius: 50%;
    animation:grow 1.6s ease-in-out infinite;
    animation-delay: var(--delay);
    box-shadow: 0 0 50px var(--color);
  }
  @keyframes grow {
    0%,
    40%,
    100% {
        transform: scale(0.4);
    }
    20% {
        transform: scale(1);
    }
    
  }
</style>