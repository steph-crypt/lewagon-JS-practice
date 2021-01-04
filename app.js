  const burger = `<div class="card" data-id="42" data-price="15" data-category="popular">
  <div class="card-category">Popular</div>
  <div class="card-description">
    <h2>The best burger in town (15€)</h2>
  </div>
</div>`;

const dataset = (element) => {
  const card = document.querySelector(".card");
  const data = {
    id: +card.dataset.id,
    price: +card.dataset.price,
    category: card.dataset.category
  };
  console.log(data);
};

//: return the element's data attributes in an object

dataset(burger);

module.exports = dataset; // Do not remove.
