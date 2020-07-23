var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        selectedVariant: 0,
        // image: './assets/vmSocks-green-onWhite.jpg',
        // inStock: false,
        inventory: 11,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Unisex"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpg',
                variantQuantity: 10,
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage:'./assets/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        cart: 0,
        onSale: true
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        subtractFromCart() {
            this.cart -= 1
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        }
  
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale(){
            if (this.onSale) {
            return this.brand + ' ' + this.product + ' are on sale!'
        }
            return this.brand + ' ' + this.product + ' are not on sale!'

        }
    }
})