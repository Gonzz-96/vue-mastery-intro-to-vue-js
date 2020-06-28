Vue.component('product', {
  template: `
  <div class="product">
    <div class="product-image">
      <!-- v-bind dynamically binds an attribute to an expression -->
      <!-- Shorthand: instead of write v-bind:src, we can write :src -->
      <!-- Also there;s a directive called v-show that will accept a boolean value and will change the display from visible to none dependeing on value -->
      <img v-bind:src="image">
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>

      <ul>
        <li v-for="detail in details">{{ detail}}</li>
      </ul>

      <!-- Shorthand for v-on is @ -->
      <!-- More eventes: @click, @mouseover, @submit on a form, @keyup.enter in input -->
      <div v-for="(variant, index) in variants" 
          :key="variant.variantId"
          @mouseover="updateProduct(index)"
          class="color-box"
          :style="{ 'background-color': variant.variantColor}">
      </div>

      <button v-on:click="addToCart" 
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }">Add to cart</button>

      <div class="cart">
        <p>Cart({{ cart }})</p>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      selectedVariant: 0,
      inventory: 100,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './assets/vmSocks-green-onWhite.jpg',
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './assets/vmSocks-blue-onWhite.jpg',
          variantQuantity: 0
        }
      ],
      cart: 0
    }
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  }
})

var app = new Vue({
  el: '#app'
})
