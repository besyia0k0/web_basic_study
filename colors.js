var Body = {
  setColor: function (color) {
    $('body').css('color', color);
    //document.querySelector('body').style.color = color;
  },
  setBackgroundcolor: function (color) {
    $('body').css('backgroundColor', color);
    //document.querySelector('body').style.backgroundColor = color;
  }
}
var	Links = {
  setColor: function (color)
  {
    $('a').css('color', color);
    $('#active').css('color', 'mediumpurple');
    // var	list = document.querySelectorAll('a');
    // for (var i of list)
    // if (i.getAttribute('id') == 'active')
    //   i.style.color = 'mediumpurple';
    // else
    //   i.style.color = color;
  }
}

function nightDayHandler(self) {
  var target = document.querySelector('body');
  if (self.value == 'night')
  {
    self.value = 'day';
    Body.setBackgroundcolor('black');
    Body.setColor('white');
    Link.setColor('powderblue');
  }
  else
  {
    self.value = 'night';
    Body.setBackgroundcolor('white');
    Body.setColor('black');
    Link.setColor('cornflowerblue');
  }
}