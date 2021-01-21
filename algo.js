var selection =  document.getElementById('jours')
var box = document.querySelector('.reponse')
var reference = document.querySelector('.ref')
var colori = document.querySelector('.coloris')
var order = document.querySelector('.commande')


selection.addEventListener("change", backgrounds)





function backgrounds(){
    var choice = selection.value

    if (choice === "white"){
        box.style.backgroundImage = "url('audi-rs4-avant-blanc-glacier-white-2019.png')"
        box.style.backgroundSize = "500px"
        box.style.backgroundRepeat = "no-repeat"
        reference.style.display = "block"
        order.style.display = "block"
        document.querySelector(".coloris").textContent= "Coloris Blanc"
        setInterval(function(){
            reference.style.opacity = 1
        }, 100)
        setInterval(function(){
            box.style.opacity = 1
        }, 100)
    } 
    else if (choice === "green"){
        box.style.backgroundImage = "url('audi-rs4-avant-vert-sonoma-green.png')"
        reference.style.display = "block"
        order.style.display = "block"
        document.querySelector(".coloris").textContent= "Coloris Vert"
        setInterval(function(){
            reference.style.opacity = 1
        }, 100)
        
    }
        
    else if (choice === "black"){
        box.style.backgroundImage = "url('audi-rs4-avant-vert-sonoma-green.png')"
        reference.style.display = "block"
        order.style.display = "block"
        document.querySelector(".coloris").textContent= "Coloris Noir"
        setInterval(function(){
            reference.style.opacity = 1
        }, 100)
    }
        
    else if (choice === "grey"){
        box.style.backgroundImage = "url('audi-rs4-avant-gris-nardo-grey-2018-b9.png')"
        reference.style.display = "block"
        order.style.display = "block"
        document.querySelector(".coloris").textContent= "Coloris Gris Nardo"
        setInterval(function(){
            reference.style.opacity = 1
        }, 100)
    }
        
    else if (choice === "red"){
        box.style.backgroundImage = "url('audi-rs4-avant-rouge-misano-red-break.png')"
        reference.style.display = "block"
        order.style.display = "block"
        document.querySelector(".coloris").textContent= "Coloris Rouge"
        setInterval(function(){
            reference.style.opacity = 1
        }, 100)
    }
    else if (choice === "blue"){
        box.style.backgroundImage = "url('audi-rs4-avant-bleu-navarre-navarra-blue-2020.png')"
        reference.style.display = "block"
        order.style.display = "block"
        document.querySelector(".coloris").textContent= "Coloris Bleu"
        setInterval(function(){
            reference.style.opacity = 1
        }, 100)
    }
    else if (choice === "1"){
        box.style.backgroundImage = "none"
        reference.style.display = "none"
        order.style.display = "none"
        document.querySelector(".coloris").textContent= "Audi RS4 Cross-Back"

    }
        

}


var accordion = document.querySelectorAll('.deploy')
var plus = document.querySelector('.plus')


for (var i = 0; i < accordion.length; i++)

accordion[i].addEventListener("click", function(){
    var choix = this.nextElementSibling
    if(choix.style.maxHeight){
        choix.style.maxHeight = null
        order.style.display = "none"
    } else {
        choix.style.maxHeight = choix.scrollHeight + "px"
        setTimeout(function(){
            order.style.display = "block"
        }, 500)
        
    }
} )


plus.addEventListener("click", function(){
    plus.classList.toggle('rotation')
})


var vehicule = document.getElementById('Capa_1')

var menu = document.querySelector('.deroulant1')

var vehicule2 = document.getElementById('Capa_2')

var menu2 = document.querySelector('.deroulant2')

var vehicule3 = document.getElementById('Capa_3')

var menu3 = document.querySelector('.deroulant3')

vehicule.addEventListener("click", function(){
    menu.classList.toggle('show')
    menu2.classList.remove('show')
    menu3.classList.remove('show')
})

vehicule2.addEventListener("click", function(){
    menu2.classList.toggle('show')
    menu.classList.remove('show')
    menu3.classList.remove('show')
})

vehicule3.addEventListener("click", function(){
    menu3.classList.toggle('show')
    menu.classList.remove('show')
    menu2.classList.remove('show')
})


var devis = document.querySelector('.demande')
var pave =  document.querySelector('.speech')


devis.addEventListener('mouseenter', function(){
    pave.classList.add('show')


})
devis.addEventListener('mouseleave', function(){
    pave.classList.remove('show')

})


