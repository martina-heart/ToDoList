/**
 * Use an IIFE to avoid contanminating global namespce
 * (Immediately Invoked Function Expression)
 * is a JavaScript function that runs as soon as it is defined.
 **/

(function () {
  // Grab stores items from the DOM
  let storeItems = document.querySelectorAll(".store-item");
  //Grab lightbox container
  let lightBox = document.querySelector(".lightbox-container");
  //Grab the div with the lightbox item
  let lightBoxItem = document.querySelector(".lightbox-item");
  //Grab all the images from the store items
  let images = document.querySelectorAll(".store-img");

  // set up an array from the items
  let imagesList = [];
  // set up a counter to run through the list od images
  let imageCounter = 0;
  //button

  // use a forEach loop to get a copy of all the images and push into an array of items
  images.forEach(function (image) {
    imagesList.push(image.src);
  });

  //Add an click event listener to each store item
  storeItems.forEach(function (item) {
    //on click,allow the model container to show
    //Change css class from display none to display block
    item.addEventListener("click", function (e) {
      console.log(e.target.src);
      // Grab the image of the item that was clicked
      let image = e.target.src;
      // Change the background img property od the lightbox item
      lightBoxItem.getElementsByClassName.backgroundImage = `url(${image})`; //--> 'url(' + image + ')';
      //show the modal with the selected image
      lightBox.classList.add("show");
      //get the array index number for the image that was selected
      imageCounter = imagesList.indexOf(image);
    });
  });

  //wire up the left and right buttons
  //select left button from the DOM
  let btnLeft = document.querySelector(".btnLeft");
  btnLeft.addEventListener("click", function () {
    imageCounter--;
    if (imageCounter < 0) {
      imageCounter = imagesList.length - 1;
    }
    lightBoxItem.style.backgroundImage = `url(${imagesList[imageCounter]})`;
  });
  //select right button from the DOM
  let btnRight = document.querySelector(".btnRight");
  btnRight.addEventListener("click", function () {
    imageCounter++;
    if (imageCounter >= imagesList.length) {
      imageCounter = 0;
    }
    lightBoxItem.style.backgroundImage = `url(${imagesList[imageCounter]})`;
  });

  //wire up the modal's close button
  let lightBoxClose = document.querySelector(".lightbox-close");
  lightBoxClose.addEventListener("click", function () {
    lightBox.classList.remove("show");
  });
})();
