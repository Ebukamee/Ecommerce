<template>\
<section id="newsletter" class="section-p1 section-m1">
            <div class="newstext">
                <h1>Sign Up For Newsletters</h1>
                <p>Get E-mail updates about our latest shop and <span>special offers.</span>
                </p>
            </div>
            <div class="form">
                <input type="text" placeholder="Your email address">
                <button class="normal">Sign Up</button>
            </div>
        </section>

    <footer class="section-p1">
        <div class="logo">
            <h2>Shopify</h2>
        </div>
            <div class="col">
                <h4>Contact</h4>
                <p><strong>Address:</strong> Shop 31, Ebeano Shopping Complex, G.R.A, Enugu </p>
                <p><strong>Phone:</strong> (+234) 803 304 5489</p>
                <p><strong>Hours:</strong> 8:00 - 18:00 Mon-Sat</p>
                <!-- <div class="follow">
                    <h4>Follow us</h4>
                    <div class="icon">
                        <i class='bx bxl-facebook'></i>
                        <i class='bx bxl-twitter' ></i>
                        <i class='bx bxl-instagram' ></i>
                    </div>
                </div> -->
            </div>
        <div class="col">
            <h4>About</h4>
            <a href="#">About us</a>
        </div>

        <div class="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">Help</a>
        </div>

        <div class="col install">
            <h4>Secured Payment Gateway</h4>
            <img src="payment.png" alt="">
        </div>

        <div class="copyright">
            <p>© Shopify Ventures 2023.</p>
        </div>
        </footer>
</template>

<style scoped>
  footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 14px;
    box-sizing: border-box;
    padding: 0px 5%;
  }
  h4 {
    font-size: 20px;
    font-weight: 700;
  }
  a{
    text-decoration: none;
    color: var(--black);
  }
  .copyright {
    width: 100%;
    text-align: center;
  }
  .logo {
    margin-bottom: 10px;
    color: var(--green);
    font-size: 20px;
    width: 100%;
  }
  input {
    border: 1px solid white;
    padding: 10px;
  }
  button {
    background-color: #088178;
    color: #fff;
    white-space: nowrap;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: 1px solid var(--green);
  }
  #newsletter .form {
    display: flex;
    width: 40%;
}
  #newsletter {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    background-color: #041e42;
    background-image: url('../assets/bg.png');
    background-position: 20% 30%;
    /* width: 100%; */
    margin-top: 50px;
    color: white;
    padding: 20px 5%
}
span {
    color: var(--brown);
}
</style>