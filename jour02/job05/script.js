function scrollPercent(n) {
  n = n || document.documentElement;
  var y = Math.round(n.scrollTop / (n.scrollHeight - n.clientHeight) * 100),
      x = Math.round(n.scrollLeft / (n.scrollWidth - n.clientWidth) * 100);
  return {
      top: isNaN(y) ? 0 : y,
      left: isNaN(x) ? 0 : x
  };
}

function colorScrolling() {
    let percent = scrollPercent().top;
    let colorCode = Math.round(255*percent/100).toString(16).padStart(2, "0");
    console.log('#' + colorCode +'0000');
    document.querySelector("footer").style.backgroundColor = '#' + colorCode +'0000';
}

document.addEventListener("scroll", (event) => {
    colorScrolling()
});