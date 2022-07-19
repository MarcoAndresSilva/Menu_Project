/*con esta funcioanlidad recorro un arreglo y
muestro cada elemento en el documento html dinamicamente del
segun su categoria ID con en metodo .map */

const menu = [{
    id: 1,
    title: "cream gold",
    category: "cupcakes",
    price: 8000,
    img: "./img/img1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 2,
    title: "Strawberry",
    category: "cupcakes",
    price: 8000,
    img: "./img/img2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `
  },
  {
    id: 3,
    title: "passion red",
    category: "cupcakes",
    price: 10000,
    img: "./img/img3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
  },
  {
    id: 4,
    title: "chocolate mint",
    category: "cupcakes",
    price: 10000,
    img: "./img/img4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `
  },
  {
    id: 5,
    title: "cream cherry",
    category: "cupcakes",
    price: 10000,
    img: "./img/img5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
  },
  {
    id: 6,
    title: "garden",
    category: "cakes",
    price: 35000,
    img: "./img/img6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
  },
  {
    id: 7,
    title: "girl scout cookies",
    category: "cakes",
    price: 45000,
    img: "./img/img7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
  },
  {
    id: 8,
    title: "roses park",
    category: "cakes",
    price: 40000,
    img: "./img/img8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
  },
  {
    id: 9,
    title: "gelato",
    category: "cakes",
    price: 45000,
    img: "./img/img9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  },
  {
    id: 10,
    title: "chocolate vanilla",
    category: "cakes",
    price: 45000,
    img: "./img/img10.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  },
  {
    id: 11,
    title: "marshmallow palate",
    category: "pops",
    price: 12000,
    img: "./img/img11.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  },
  {
    id: 12,
    title: "cake pops chocolate",
    category: "pops",
    price: 10000,
    img: "./img/img12.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  },
  {
    id: 13,
    title: "unicornio pops",
    category: "pops",
    price: 15000,
    img: "./img/img13.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  },
  {
    id: 14,
    title: "coconuts pops",
    category: "pops",
    price: 10000,
    img: "./img/img14.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  },
  {
    id: 15,
    title: "bluberry pops",
    category: "pops",
    price: 15000,
    img: "./img/img15.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});