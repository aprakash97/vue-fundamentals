<!-- <script>
export default {
  data: () => ({
    products: [
      {
        id: 1,
        name: "A",
      },
      {
        id: 2,
        name: "B",
      },
      {
        id: 3,
        name: "C",
      },
      {
        id: 4,
        name: "D",
      },
      {
        id: 5,
        name: "E",
      },
      {
        id: 6,
        name: "F",
      },
    ],
  }),
};
</script>
<template>
  <div class="product-container">
    <div class="product-card" v-for="product in products" :key="product.id">
      {{ product.name }}
    </div>
  </div>
</template>

<style>
.product-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
}

.product-card {
  background: #961111;
}
</style> -->

function getFilteredCourses (courses) {
    return courses.map(course => ({ 

    id: course.id,
    title: course.title,
    instructor: course.instructor.name,
    rating: course.meta.rating.toFixed(1), 
    activeStudents: course.meta.enrollments.active toLocaleString(),
    isAdvanced: course.tags.includes ('Advanced'), }))
}


[ { "id": "p01", "name": "Organic Black Tea", "status": "active", "Image":
"https://cdn.example.com/tea.jpg", "category": "Tea", "variants": [ {"sku":
"p81-75g", "spec": "75g Trial Pack", "price": 358, "stock": 120 }, {"sku":
"p01-150g", "spec": "150g Classic Pack", "price": 600, "stock": 85} ] }, { "id":
"p03", "name": "Ceramic Mug Set", "status": "active", "image": null, "category":
"Lifestyle", "variants":[ {"sku": "p03-w", "spec": "white", "price": 280,
"stock": 8}, { "sku": "p03-b", "spec": "Black", "price": 280, "stock": 0 } ] },
{ "id": "p84", "name": "Fresh Milk Cheesecake", "status": "active", "image":
"https://cdn.example.com/cake.jpg", "category": "Desserts", "variants":[ {
"sku": "p04-6", "spec": "6-inch", "price": 420, "stock": 5}, { "sku": "p04-8",
"spec": "8-inch", "price": 580, "stock": 3} ] }, { "id": "p05", "name":
"Essential Oil Gift Set", "status": "active", "image":
"https://cdn.example.com/oil.jpg", "category": "Lifestyle", " variants": [
{"sku": "p05-10", "spec": "10ml", "price": 450, "stock": 60}, {"sku": "p05-30",
"spec": "30ml", "price": 1200, "stock": 25 } ], } { "id": "p06", "name":
"Seasonal Fruit Box", "status": "soldout", "image":
"https://cdn.example.com/fruit.jpg", "category": "Fresh Produce", "category":
"Fresh Product", "variants":[ {"sku": "p06-s", "spec": "Small Box (3kg)",
"price": 650, "stock": 0}, {"sku": "p06-s", "spec": "Small Box (3kg)", "price":
650, "stock": 0 } ] } ]
<template>
  <div>
    <div v-for="product in productList">
      <img src="product.image" />

      <p>{{ product.name }}</p>

      <p>{{ formatCurrency(product.price) }}</p>

      <button @click="chooseProduct(product.id)">Choose Product</button>
      <div v-if="loading">Loading...</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productList: [],
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    const res = await fetch("/api/products");
    this.productList = await res.json();
    this.loading = false;
  },
  methods: {
    formatCurrency(val) {
      return "$" + val.toFixed(2);
    },
    chooseProduct(id) {
      window.location.href = "/product/" + id;
    },
  },
};
</script>
