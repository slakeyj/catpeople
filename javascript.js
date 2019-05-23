alert("Hello and welcome to Cat People!  My apologies for all the pop-ups!")

var name = prompt("May I have your cat's name?");

if (name.toLowerCase() === "tucker") {
  document.write(name + "'s my cats name too! We promise we will meet all of " + name + "'s needs.")
} else if (name.toLowerCase() === "abby") {
  document.write(name + "'s my cats name too! We promise we will meet all of " + name + "'s needs.")
} else if (name.toLowerCase() === "maggie") {
  document.write(name + "'s my cats name too! We promise we will meet all of " + name + "'s needs.")
} else if (name === null || name === "") {
  document.write("Welcome to Cat People!");
} else {
  document.write("Welcome! We promise we will meet all of " + name + "'s needs.")
}

confirm("Press OK to proceed!");





