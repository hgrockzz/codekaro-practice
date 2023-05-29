//-- download
let check = 0
function fn(){
    let title = document.getElementById('download-h1')

    if(!check){
        title.innerText = "your file is downloading..."
        check = 1
    }
    else{
        title.innerText = "ho rha h bhai download! chinta mat krow"
        check = 0
        //to make button disapper
        document.getElementById('btn').style.display = 'none' 
    }
}

//--show name
function showName(){
    let name = document.getElementById('t1')
    document.getElementById('name').innerText = name.value 
    console.log(name.value);
    name.value = ''
}

//--disco mode
var music = new Audio("Jhalak Dikhla Jaa.mp3")
function disco(){
    let bg = document.getElementById('body')
    bg.classList.add('disco')
    music.play()
}
function nodisco(){
    let bg = document.getElementById('body')
    bg.classList.remove('disco')
    music.pause()
}