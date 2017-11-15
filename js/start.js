document.getElementById("more").addEventListener("click", checkSideBar, null);
window.addEventListener('resize', checkAll, null);

function checkAll(event) {
	let elem1 = document.getElementById("sidebar");
	let leftMargin = window.getComputedStyle(elem1, null).getPropertyValue("left");
	let elem2 = document.getElementById("content");
	let windowSize = window.innerWidth;
	if (windowSize > 980) {
		elem1.style.left = "0px";
		elem2.style.width = 'calc(100% - 250px)';
		elem2.style.margin = '0 0 0 250px';
	} else {
		elem1.style.left = "-100%";
		elem2.style.width = '100%';
		elem2.style.margin = '0';
	}
}

function checkSideBar(event) {
    let elem1 = document.getElementById("sidebar");
	let leftMargin = window.getComputedStyle(elem1, null).getPropertyValue("left");
	let barWidth = window.getComputedStyle(elem1, null).getPropertyValue("width");
	let elem2 = document.getElementById("content");
	if (leftMargin == '0px') {
		if(barWidth == '250px') {
			elem1.style.left = "-250px";
			elem2.style.width = '100%';
			elem2.style.margin = '0';
		} else {
			elem1.style.left = "-100%";
		}
		
	} else {
		elem1.style.left = "0px";
		if(barWidth == '250px') {
			elem2.style.width = 'calc(100% - 250px)';
			elem2.style.margin = '0 0 0 250px';
		}
	}
  }