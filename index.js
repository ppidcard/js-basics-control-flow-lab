let message;

function scuberGreetingForFeet(ride){
  if(ride<400){
    message = "This one is on me!";
  }else if(ride>2000 && ride<=2500){
    message = "I will gladly take your thirty bucks.";
  }else if(ride>2500){
    message = "No can do.";
  }
  return message;
}

function ternaryCheckCity(city){
  if(city === "NYC"){
  message = "Ok, sounds good.";
}else{
  message = "No go."
}
return message;
}

function switchOnCharmFromTip(tip){
  if(tip === "generous"){
    message = "Thank you so much.";
  }else if(tip === "not as generous"){
    message = "Thank you.";
  } else {
    message = "Bye.";
  }
      return message;
}


/*

  describe('switchOnCharmFromTip()', function () {
    it('should return "Thank you so much." if the tip is generous', function () {
      expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
    });

    it('should return "Thank you." if the tip is not as generous', function () {
      expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
    });

    it('should return "Bye." if anything else', function () {
      expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
    });
  });
});
*/