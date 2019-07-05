// alert("Hello and welcome to Cat People!  My apologies for all the pop-ups!")


function catGreeting() {
  var name = prompt("May I have your cat's name?");
  var matchingNameGreeting = name + "'s my cats name too! ";
  var output;
  matchingNameGreeting += "We promise we will meet all of " + name + "'s needs.";
  if (name.toLowerCase() == "tucker" || name.toLowerCase() == "abby" || name.toLowerCase() === "maggie") {
    output = matchingNameGreeting;
  } else if (name == null || name == "") {
    output = "Welcome to Cat People!";
  } else {
    output = "Welcome! We promise we will meet all of " + name + "'s needs.";
  }
  return output;
}

function hereFor() {
  var answer = '';
  var foodSpecial = "Today we're having a 25% off special on all wet food!"
  var toySpecial = "Today we're having a Buy One Get One Free special on all mouse toys!"
  while (answer.toLowerCase() != "cat food" && answer.toLowerCase() != "cat toys") {
    answer = prompt("Are you here for Cat Food or Cat Toys?");
  }

  if (answer == "cat food") {
    return foodSpecial;
  } else if (answer == "cat toys") {
    return toySpecial;
  }
}

function howManyToys() {
  var number = prompt("How many toys would you like to buy today?");
  var output = '';
  for (var i = 0; i < number; i++) {
    var num = i + 1;
    output += '<li>' + num + ' toy <li>';
  }
  return output;
}



// confirm("Press OK to proceed!");





