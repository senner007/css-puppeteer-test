var outer = document.querySelector('#outer');


console.log(outer.children.length)



Array.from(outer.children).forEach(function (v,i) {
    console.log(v.clientWidth)

})