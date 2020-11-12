// 1: Get the node with the  main title

let mainTitle = document.querySelector("h1")
window.addEventListener('load', (event) => {
  console.log(mainTitle);
});

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

let mainTitleText = document.querySelector("h1").innerText
window.addEventListener('load', (event) => {
  console.log(mainTitleText);
});
// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

let fruitItems = document.getElementsByClassName(".fruit-item")
window.addEventListener('load', (event) => {
  console.log(fruitItems);
});

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

let veggieItems = document.getElementsByClassName(".veggies")
window.addEventListener('load', (event) => {
  console.log(veggieItems);
})
// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

let subTitle = document.querySelector(".list-veggies h2")
window.addEventListener('load', (event) => {
  console.log(subTitle.innerText);
})
// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

let newFruitTitle = document.querySelector(".list-fruits h2").setAttribute("ID", "fruit-title");;
window.addEventListener('load', (event) => {
  console.log(document.getElementById("fruit-title").innerText);
})
// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

// fruitItems[0].setAttribute("class", "best-fruit");
// fruitItems[2].setAttribute("class", "best-fruit");
var x = document.getElementsByClassName("fruits")
window.addEventListener('load', (event) => {
  console.log(x);
})

// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies
subTitle.classList.remove("veggies");
window.addEventListener('load', (event) => {
  console.log(document.querySelectorAll("ul"));
})
// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

// ... your code here

// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

// ... your code here

// => ... <li class="veggie-love">Spinach</li>