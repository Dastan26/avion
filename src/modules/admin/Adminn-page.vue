<template>
  <div class="admin">
    <div class="container">
      <div class="admin-wrapper">
        <h2>Add products</h2>
        <h3>Only for admins</h3>
        <form action="" class="form" ref="form">
          <label for="image">Image URL</label>
          <input
            type="text"
            id="image"
            v-model="product.img"
            @change="updateImagePath"
          />
          <label for="title">Title</label>
          <input type="text" id="title" v-model="product.title" />
          <label for="price">Price</label>
          <input type="text" id="price" v-model="product.price" />
          <label for="description">Description</label>
          <textarea
            name="description"
            cols="30"
            rows="10"
            v-model="product.description"
          ></textarea>
          <label for="height">Height</label>
          <input type="text" id="height" v-model="product.height" />
          <label for="width">Width</label>
          <input type="text" id="width" v-model="product.width" />
          <label for="depth">Depth</label>
          <input type="text" id="depth" v-model="product.depth" />
          <button type="button" @click="addProducts">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        img: "",
        title: "",
        price: "",
        description: "",
        height: "",
        width: "",
        depth: "",
        quantity: "",
      },
      imagePath: "",
    };
  },
  methods: {
    clearForm() {
      this.$refs.form.reset();
    },
    updateImagePath(event) {
      this.imagePath = URL.createObjectURL(event.target.files[0]);
    },

    addProducts() {
      try {
        fetch("http://localhost:3000/products", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(this.product),
        })
          .then((res) => res.json())
          .then((json) => console.log(json));

        alert("Товар был успешно добавлен!");

        this.clearForm();
      } catch {
        alert("Ошибка!");
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/admin.scss";
</style>
