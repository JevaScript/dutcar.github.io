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
var arrow = document.getElementById("devis-arrow")
var music = document.querySelector('audio')

devis.addEventListener('mouseenter', function(){
    arrow.style.opacity = 1
    music.play()

    

})
devis.addEventListener('mouseleave', function(){
    arrow.style.opacity = 0
    music.pause()
})


devis.addEventListener('mouseenter', function(){
    pave.classList.add('show')


})
devis.addEventListener('mouseleave', function(){
    pave.classList.remove('show')

})

var graphik = document.querySelector('.graph1')
var graphik2 = document.querySelector('.graph2')
var graphik3 = document.querySelector('.graph3')
var graphik4 = document.querySelector('.graph4')
var graphik5 = document.querySelector('.graph5')
var graphik6 = document.querySelector('.graph6')
var deuxmil = document.querySelector('.2000')
var bar = document.getElementById('bars')

function graphshow(){
    graphik.style.width = 70 + "%"
    graphik2.style.width = 30 + "%"
    graphik3.style.width = 20 + "%"
    graphik4.style.width = 80 + "%"
    graphik5.style.width = 60 + "%"
    graphik6.style.width = 90 + "%"

    if(graphik.style.width > 50 + "%"){
        graphik.style.backgroundColor = "grey"

    } else {
        graphik.style.backgroundColor = "white"
    }
}
function graphshow2(){
    graphik.style.width = 40 + "%"
    graphik2.style.width = 80 + "%"
    graphik3.style.width = 70 + "%"
    graphik4.style.width = 12 + "%"
    graphik5.style.width = 40 + "%"
    graphik6.style.width = 20 + "%"
}
function graphshow3(){
    graphik.style.width = 20 + "%"
    graphik2.style.width = 80 + "%"
    graphik3.style.width = 50 + "%"
    graphik4.style.width = 80 + "%"
    graphik5.style.width = 50 + "%"
    graphik6.style.width = 56 + "%"
}





