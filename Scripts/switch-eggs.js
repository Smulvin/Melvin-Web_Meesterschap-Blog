/*********************/
/*   Joy Con Colors  */
/*********************/

let leftJoycon = document.querySelector(".switch-left");
let rightJoycon = document.querySelector(".switch-right");

let minusBtn = document.getElementById("btn-minus");
let plusBtn = document.getElementById("btn-plus");

// Bron voor kleuren: https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYwY-w_I479WtU86ChXSwaWMJ_rT2GSUoILEcc6AADpwJnBXPFzl10Ckr4oc5XBoAs4j8agIUVv_HNU3zlHvDFhvo9sfnIk593Xn4JsS36Bltfv0zy9YRXKMVtKxAWB337klS9i0zNhOM&usqp=CAc
const leftColors = [
    "#d3c2d6", // Lavender
    "#a950b0", // Purple
    "#7ddead", // Teal
    "#82838a", // Gray
    "#46c4ea", // Light blue
    "#ad4fb7", // Magenta
    "#e2e2e2", // Light gray
    "#ed5d8b", // Pink
    "#474747",  // Dark gray
    "#01c4e0", // Default blue
];

const rightColors = [
    "#b2dcc5", // Mint
    "#fbba52", // Golden
    "#85e1e8", // Light blue
    "#85898c", // Gray
    "#ed7167", // Coral
    "#f56593", // Pink
    "#e3e3e3", // Light gray
    "#46d76d", // Green
    "#474747",  // Dark gray
    "#fe6054"   // Default red
];

/* State */
let leftIndex = 0;
let rightIndex = 0;

/* Smooth transition */
// leftJoycon.style.transition = "background 0.3s ease";
// rightJoycon.style.transition = "background 0.3s ease";

/* LEFT only */
minusBtn.addEventListener("click", () => {
    leftIndex = (leftIndex + 1) % leftColors.length;
    leftJoycon.style.background = leftColors[leftIndex];
});

/* RIGHT only */
plusBtn.addEventListener("click", () => {
    rightIndex = (rightIndex + 1) % rightColors.length;
    rightJoycon.style.background = rightColors[rightIndex];
});
