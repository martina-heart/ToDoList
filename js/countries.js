// //Buttons//
// const buttons = document.querySelectorAll("li");
// const section = document.querySelectorAll(".every");

// buttons.forEach((item) => {
//   item.addEventListener("click", () => {
//     buttons.forEach((item) => {
//       item.className = "";
//     });
//     item.className = "active";
//     let values = item.textContent;
//     section.forEach((show) => {
//       show.style.display = "none";
//       if (
//         show.getAttribute("data-id") === values ||
//         values === "all countries"
//       ) {
//         show.style.display = "block";
//       }
//     });
//   });
// });

//Serach//
// function myFunction() {
//   var input, filter, li, a, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   div = document.getElementsByClassName("every");
//   li = div.getElementsByTagName("li");
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }
