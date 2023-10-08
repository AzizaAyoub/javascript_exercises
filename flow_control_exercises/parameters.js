// Without running this code, what will it print?

function show(foo = undefined, bar = null) {
    console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
  }
  
  show(5, 7); // foo 5 bar 7
  show(0, 0); // foo 0 bar 0 
  show(4); // foo 4 bar 42
  show(); // foo 3 bar 42