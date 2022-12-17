// =================
// listener

function listener(element){
    dv1.addEventListener("mouseenter", function(){
        console.log("in")
    })
    
    dv1.addEventListener("mouseleave", function(){
        console.log("out")
    })
}
// =================
// switch



function dropdown(){
    const dropdown = document.getElementById("myDropdown")
    const figures = document.querySelectorAll(".figure")

    dropdown.addEventListener("change", function(){
        let content = dropdown.value
        let id
        
        figures.forEach(function(a){
            a.style.display = "none"
        })
        if (content === "USA map of accidents"){
            id = "dropdown_contentA"
        }

        if (content === "New york and nearby States accidents"){
            id = "dropdown_contentB"
        }
        
        if (content === "New York Accidents per population"){
            id = "dropdown_contentC"
        }
        
        let elem = document.getElementById(id)
        elem.style.display = "block"
    })
}

function slideImg() {
  var x = document.getElementById("mySlide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function slideImg2() {
    var x = document.getElementById("mySlide1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// =================
// page load

window.addEventListener("load", function(){
    highlight()
    dropdown()
    slideImg()
    slideImg2()
})
