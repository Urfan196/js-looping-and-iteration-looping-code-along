

function writeCards(names, event) {
   let thanks = []
    for (let i = 0; i < names.length; i++) {
        thanks.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!` );      
    }
    return thanks;
}

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }