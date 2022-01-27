$(window).scroll(function() {
    scrollNavBar("desktop")
    scrollNavBar("mobile")
})


$(document).ready(function(){
    scrollNavBar("desktop")
    scrollNavBar("mobile")
})


function scrollNavBar(pClass){
    
    if (window.matchMedia("(min-width: 786px)").matches) {
        if($(`#div-header-${pClass}`).offset().top > -10){
    
            $(`.nav__${pClass}--a-inicio`).addClass(`li-active-${pClass}`)
    
        } else{
            $(`.nav__${pClass}--a-inicio`).removeClass(`li-active-${pClass}`)
        }
    
        if($(`#div-header-${pClass}`).offset().top > 570){
    
            $(`.nav__${pClass}--a-inicio`).removeClass(`li-active-${pClass}`)
    
            $(`.nav__${pClass}--a-productos`).addClass(`li-active-${pClass}`)
    
        } else{
    
            $(`.nav__${pClass}--a-productos`).removeClass(`li-active-${pClass}`)
            
        }
    
        if($(`#div-header-${pClass}`).offset().top > 1370){
    
            $(`.nav__${pClass}--a-productos`).removeClass(`li-active-${pClass}`)
    
            $(`.nav__${pClass}--a-que-hacemos`).addClass(`li-active-${pClass}`)
    
        } else{
    
            $(`.nav__${pClass}--a-que-hacemos`).removeClass(`li-active-${pClass}`)
    
        }
    
        if($(`#div-header-${pClass}`).offset().top > 2260){
    
            $(`.nav__${pClass}--a-que-hacemos`).removeClass(`li-active-${pClass}`)
    
            $(`.nav__${pClass}--a-equipo`).addClass(`li-active-${pClass}`)
    
        } else{
    
            $(`.nav__${pClass}--a-equipo`).removeClass(`li-active-${pClass}`)
    
        }
    
        if($(`#div-header-${pClass}`).offset().top > 3470){
    
            $(`.nav__${pClass}--a-equipo`).removeClass(`li-active-${pClass}`)
    
            $(`.nav__${pClass}--a-aliados`).addClass(`li-active-${pClass}`)
    
        } else{
    
            $(`.nav__${pClass}--a-aliados`).removeClass(`li-active-${pClass}`)
    
        }
        if($(`#div-header-${pClass}`).offset().top > 3915){
    
            $(`.nav__${pClass}--a-aliados`).removeClass(`li-active-${pClass}`)
    
        }
    } else {

        if($(`#div-header-${pClass}`).offset().top > -10){
    
            $(`.nav__${pClass}--a-inicio`).addClass(`li-active-${pClass}`)
    
        } else{
            $(`.nav__${pClass}--a-inicio`).removeClass(`li-active-${pClass}`)
        }
    
        if($(`#div-header-${pClass}`).offset().top > 570){
    
            $(`.nav__${pClass}--a-inicio`).removeClass(`li-active-${pClass}`)
    
            $(`.nav__${pClass}--a-productos`).addClass(`li-active-${pClass}`)
    
        } else{
    
            $(`.nav__${pClass}--a-productos`).removeClass(`li-active-${pClass}`)
            
        }
    
        if($(`#div-header-${pClass}`).offset().top > 1760){
    
            $(`.nav__${pClass}--a-productos`).removeClass(`li-active-${pClass}`)
    
            $(`.nav__${pClass}--a-que-hacemos`).addClass(`li-active-${pClass}`)
    
        } else{
    
            $(`.nav__${pClass}--a-que-hacemos`).removeClass(`li-active-${pClass}`)
    
        }
    
        if($(`#div-header-${pClass}`).offset().top > 2820){
    
            $(`.nav__${pClass}--a-que-hacemos`).removeClass(`li-active-${pClass}`)
    
            $(`.nav__${pClass}--a-equipo`).addClass(`li-active-${pClass}`)
    
        } else{
    
            $(`.nav__${pClass}--a-equipo`).removeClass(`li-active-${pClass}`)
    
        }
    
        if($(`#div-header-${pClass}`).offset().top > 3550){
    
            $(`.nav__${pClass}--a-equipo`).removeClass(`li-active-${pClass}`)
    
            $(`.nav__${pClass}--a-aliados`).addClass(`li-active-${pClass}`)
    
        } else{
    
            $(`.nav__${pClass}--a-aliados`).removeClass(`li-active-${pClass}`)
    
        }
        if($(`#div-header-${pClass}`).offset().top > 3800){
    
            $(`.nav__${pClass}--a-aliados`).removeClass(`li-active-${pClass}`)
    
        }
    }
}