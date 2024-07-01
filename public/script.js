let convert = document.getElementById("convert")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

function roundOff(number){
    return Math.round(number*1000)/1000
}

function convertLength1(length){
    return roundOff(length*3.2808)
}

function convertVolume1(volume){
    return roundOff(volume*0.2641)
}

function convertMass1(mass){
    return roundOff(mass*2.2046)
}

function convertLength2(length){
    return roundOff(length/3.2808)
}

function convertVolume2(volume){
    return roundOff(volume/0.2641)
}

function convertMass2(mass){
    return roundOff(mass/2.2046)
}



convert.addEventListener("click",function(){
    console.log("clicked")
    let value = roundOff(document.getElementById("inputBox").value)
    length.textContent = `${value} meters = ${convertLength1(value)} feet | ${value} feet = ${convertLength2(value)} meters`
    volume.textContent = `${value} liters = ${convertVolume1(value)} gallons | ${value} gallons = ${convertVolume2(value)} liters`
    mass.textContent = `${value} kilos = ${convertMass1(value)} pounds | ${value} pounds = ${convertMass2(value)} kilos`

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });


})