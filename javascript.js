// alert("Hello and welcome to Cat People!  My apologies for all the pop-ups!")


function catGreeting() {
  var name = prompt("May I have your cat's name?");
  var matchingNameGreeting = name + "'s my cats name too! ";
  var output;
  matchingNameGreeting += "We promise we will meet all of " + name + "'s needs.";
  if (name.toLowerCase() === "tucker" || name.toLowerCase() === "abby" || name.toLowerCase() === "maggie") {
    output = matchingNameGreeting;
    // } else if (name.toLowerCase() === "abby") {
    //   output = matchingNameGreeting;
    // } else if (name.toLowerCase() === "maggie") {
    //   output = matchingNameGreeting;
  } else if (name === null || name === "") {
    output = "Welcome to Cat People!";
  } else {
    output = "Welcome! We promise we will meet all of " + name + "'s needs.";
  }
  return output;
}



// confirm("Press OK to proceed!");





