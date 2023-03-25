const wrapper = document.getElementById("product-list")

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    let productList = '';
    data.forEach(product => {
      productList += `
        <div class="product-card">
          <img src="${product.img}" alt="${product.title}">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <p class="price">$${product.price}</p>
        </div>
      `;
    });
    document.getElementById('product-list').innerHTML = productList;
  });
