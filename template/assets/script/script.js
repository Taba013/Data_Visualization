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

function mySwitch(){
    
    const button = document.getElementById("switch")  
    const contentA = document.getElementById("switch_contentA")
    const contentB = document.getElementById("switch_contentB")

    let content = "A"

    button.addEventListener("click", function(){

        if (content == "A"){
            contentB.style.display = "block"
            contentA.style.display = "none"
            content = "B"

            button.textContent = "show A"
        }
        else {
            contentA.style.display = "block"
            contentB.style.display = "none"
            content = "A"

            button.textContent = "show B"
        }
    })
}


function dropdown(){
    const dropdown = document.getElementById("myDropdown")
    const figures = document.querySelectorAll(".figure")

    dropdown.addEventListener("change", function(){
        let content = dropdown.value

        figures.forEach(function(a){
            a.style.display = "none"
        })

        let id = "dropdown_content" + content
        let elem = document.getElementById(id)
        elem.style.display = "block"
    })
}


// =================
// page load

window.addEventListener("load", function(){
    highlight()
    mySwitch()
    dropdown()
})
