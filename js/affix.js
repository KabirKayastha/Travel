// //non-responsive
// var target = $('#navbar')
// target.after('<div class="affix affixed-navbar" id="affix"></div>')

// var affix = $('.affix')
// affix.append(target.clone(true))

// // Show affix on scroll.
// var element = document.getElementById('affix')
// if (element !== null) {
//   var position = target.position()
//   window.addEventListener('scroll', function () {
//     var height = $(window).scrollTop()
//     if (height > position.top) {
//       target.css('visibility', 'hidden')
//       affix.css('display', 'block')
//     } else {
//       affix.css('display', 'none')
//       target.css('visibility', 'visible')
//     }
//   })
// }

//responsive
var respTarget = $('#resp-navbar')
respTarget.after('<div class="resp-affix" id="respAffix"></div>')

var respAffix = $('.resp-affix')
respAffix.append(respTarget.clone(true))

// Show affix on scroll.
var respElement = document.getElementById('respAffix')
if (respElement !== null) {
  var respPosition = respTarget.position()
  window.addEventListener('scroll', function () {
    var respHeight = $(window).scrollTop()
    if (respHeight > respPosition.top) {
      respTarget.css('visibility', 'hidden')
      respAffix.css('display', 'block')
    } else {
      respAffix.css('display', 'none')
      respTarget.css('visibility', 'visible')
    }
  })
}