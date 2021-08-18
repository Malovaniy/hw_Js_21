
getSel = x => document.querySelector(x)
getSelAll = x => document.querySelectorAll(x)
let f1 = document.forms[`f1`]
let f = document.forms['f']
let ar = document.forms['ar']
let file = document.forms['file']
let forLog = document.forms['forLog']
let isToggle = true
let trueFolse
let loginChanger
let color
let regExp = /\d/g

// let test = `4223`   
// regExp.test(test)
// console.log(regExp.test(test));

getSel('.redaktorMode').addEventListener('click', redaktorMod)
f.exit.addEventListener('click', redaktorMod)

getSel(`.boldButton`).addEventListener('click', fontStyle.bind(``, 'bold'))
getSel(`.cursive`).addEventListener('click', fontStyle.bind(``, `italic`))

getSel(`.underlineButton`).addEventListener(`click`, fontStyle.bind(``, `underline`))
getSel('.troughButton').addEventListener('click', fontStyle.bind(``, 'trough'))

getSel('.posLeft').addEventListener('click', fontPosition.bind('', 'left'))
getSel('.posCenter').addEventListener('click', fontPosition.bind('', 'center'))
getSel('.posRight').addEventListener('click', fontPosition.bind('', 'right'))

getSel('.textColors').addEventListener('click', e =>{
    trueFolse = `text`
    dipslay2('.change', 'none')
    dipslay2('.img' , 'none')
    dipslay2('.colorsBlock' , 'flex')
    getSel('.colors').classList.toggle('dispNone')
    getSel('.failes').classList.add('dispNone')
})

getSel('.bgCol').addEventListener('click', e =>{
    trueFolse = 'bgColor'
    getSel('.colors').classList.toggle('dispNone')
    dipslay2('.change', 'flex')
    getSel('.login').classList.add('dispNone')
    getSel('.failes').classList.add('dispNone')
    
})
getSel('.logInBut').addEventListener('click',e=>{
    getSel('.login').classList.toggle('dispNone')
    getSel('.colors').classList.add('dispNone')
})



getSel('.images2').addEventListener('click',e=>{
    dipslay2('.img' , 'block')
    dipslay2('.colorsBlock', 'none')
    getSel('.failes').classList.add('dispNone')

})
getSel('.color2').addEventListener('click',e=>{
    dipslay2('.img', 'none')
    dipslay2('.colorsBlock', 'flex')
    getSel('.failes').classList.add('dispNone')
})
getSel('.files').addEventListener('click',e=>{
    dipslay2('.img' , 'none')
    dipslay2('.colorsBlock', 'none')
    getSel('.failes').classList.remove('dispNone')

})

function loginTrueFolse(){
    
    if (forLog.textLog.value ==='admin' && forLog.passLog.value ==='admin'){
        getSel('.redaktorMode').disabled = false
        getSel('.login').classList.add('dispNone')
        getSel('.colors').classList.add('dispNone')
    }
}

forLog.logBut.addEventListener('click', loginTrueFolse)


f1.sel.addEventListener(`click`, e => {
    getSel(`.display`).style.fontFamily = f1.sel.value
})
f1.size.addEventListener(`click`, e => {
    getSel('.display').style.fontSize = f1.size.value
})

function fontStyle(fontSize) {
    getSel(`.display`).classList.toggle(fontSize)
}

function fontPosition(fontPos) {
    getSel('.display').style.textAlign = fontPos
}

f.tableCreate.addEventListener('click', tableCreate)

function tableCreate(){
    getSel('.divArea').classList.toggle('dispNone')
    getSel('.blockOL').classList.add('dispNone')
    getSel('.blockUL').classList.add('dispNone')
}
ar.btReset.addEventListener('click',  res)

ar.crTbl.addEventListener('click', e=>{
    console.log(regExp.test(ar.countTd.value))
    console.log(ar.countTd.value)
})
ar.crTbl.addEventListener('click', createTable)


function res(){
    ar.countTr.value = ''
    ar.widTd.value = ''
    ar.widbor.value = ''
    ar.countTd.value = ''
    ar.heigTd.value = ''
    ar.styleBorder.value = ''
    ar.colorBorder.value = ''
}

let td
let tr
let table 

function createTable(){

    let td = ''
    for(let i = 0; i< ar.countTd.value; i++){
        td += `<td style="height:${ar.widTd.value}px; width:${ar.heigTd.value}px;
        border:${ar.widbor.value}px ${ar.styleBorder.value} ${ar.colorBorder.value}; text-align:center;">td</td>`
    }
    tr = ''

    for(let i =  0; i< ar.countTr.value; i++){
        tr +=  `<tr>${td}</tr>`
    }  
    table = `<table style="border-collapse: collapse; margin-bottom: 5px" >${tr}</table>`    
    ar.area.value += table
    getSel('.divArea').classList.add('dispNone')

    res()    
}


f.listOlcreate.addEventListener(`click`,e=>{
    getSel('.blockOL').classList.toggle('dispNone')
    getSel('.blockUL').classList.add('dispNone')
    getSel('.divArea').classList.add('dispNone')
})
f.listUlCreate.addEventListener('click',e=>{
    getSel('.blockUL').classList.toggle('dispNone')
    getSel('.blockOL').classList.add('dispNone')
    getSel('.divArea').classList.add('dispNone')
})
ar.createOlBut.addEventListener('click', e=>{

    let li =``
    
    for( let i =0; i< ar.valueOl.value; i++){
        li +=`<li style="list-style: ${ar.mark.value}">li</li>`
    }
    let list =`<ol style="margin-left: 2rem;"> ${li}</ol>`
    ar.area.value += list
})

ar.createUlBut.addEventListener('click', e=>{

    let li =``
    
    for( let i =0; i< ar.valueUl.value; i++){
        li +=`<li style="list-style: ${ar.markUL.value}">li</li>`
    }
    let list =`<ul style="margin-left: 2rem;"> ${li}</ul>`
    ar.area.value += list
})
ar.resetOlBut.addEventListener('click', e=>{
    ar.mark.value =``
    ar.valueOl.value=``
})
ar.resetUlBut.addEventListener('click', e=>{
    ar.valueUl.value=``
    ar.markUL.value=``
})












function redaktorMod(e){
    isToggle =  !isToggle
    if(!isToggle) {
        ar.area.value = getSel('.display').innerHTML
        display('.centrHead', 'none' ,'.btn' , 'flex')
        getSel('.colors').classList.remove('dispBlock')
    }
    if(isToggle) {
        getSel('.display').innerHTML = ar.area.value
        display('.btn', 'none' ,'.centrHead' , 'flex')
    }          
    getSel('.forarea').classList.toggle('dispNone')
    getSel('.display').classList.toggle('dispNone')
}

function render() {

    getSelAll('.col').forEach(el => {
        el.style.backgroundColor = el.id
        el.addEventListener('click', e=>{
    
            if(trueFolse ===`text`){
            getSel(`.display`).style.color = el.id
                 
            }
            if(trueFolse === 'bgColor'){
                
            getSel(`.display`).style.backgroundColor = el.id
            getSel(`.display`).style.backgroundImage =``
            console.log('bg');
            }
        })
    });
}
render()


function imgRender(){
    getSelAll('.images').forEach(e=>{
        e.addEventListener('click', el => {
            console.log(e.id);
            getSel(`.display`).style.backgroundImage = `url('img/${+e.id}.jpg')`
        })
    })
}

imgRender()

function display(cls,displayBlock, cls2 , none) {
    getSel(cls).style.display = displayBlock
    getSel(cls2).style.display = none
}

function dipslay2(cls,displayBlock){
    getSel(cls).style.display = displayBlock
}


file.file.addEventListener('change',previewFile)

   function previewFile() {
    let file    = document.querySelector('input[type=file]').files[0];
    
    
    let reader  = new FileReader();
  
    reader.onloadend = function () {
        getSel(`.display`).style.backgroundImage = `url('${reader.result}')`  
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      getSel(`.display`).style.backgroundImage = "";
    }
  }
