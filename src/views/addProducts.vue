<template>
<h2>Shopify</h2>
    <form>
        <h3>Add Products</h3>
        <label for="">Name of product</label>
        <input type="text" required placeholder="Input product Name">
        <label for="">Price</label>
        <input type="number" name="" id="" placeholder="Input Price In naira" required>
        <label for="">Image Of product</label>
        <input type="file" name="choose_image" required>
        <label for="">Description</label>
        <textarea name="" id="" placeholder="Write a short description about the product" required></textarea>
        <button>Submit</button>
    </form>
</template>
<style>
 @import '/src/assets/index.css';
input,textarea {
    display: block;
    padding: 2.5px 10px;
    width: 80%;
    border: 1px solid var(--green);
    border-radius: 2.5px;
    margin:5px auto;
    outline: none;
  }
  input[type=file] {
    background-color: white;
  }
  button {
    padding: 2.5px 10px;
    border-radius: 2.5px;
    width: 85%;
    background-color: var(--brown);
    color: white;
    border: 1px solid var(--brown);
    font-family: 'League Spartan', sans-serif;
  }
  form {
    background-color: var(--green);
   padding: 25px 0;
   width: 80%;
    max-width: 300px;
    margin:50px auto;
    text-align: center;
    border-radius: 2.5px;
    }
    textarea {
        height: 50px;
    }
    h2 {
        color: var(--green);
        text-align: center;
    }
    label{
        color: var(--brown);
        font-size: 12px;
    }
    h3 {
        color: white;
    }
</style>