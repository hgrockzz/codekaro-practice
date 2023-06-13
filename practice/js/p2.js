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


//storing user details in array
let users = []

function successMsg() {
    let box = document.getElementById('success')
    box.classList.add('register-done','success')
    box.innerText = "User added successfully!"
    setTimeout(() => {
        box.classList.remove('register-done','success')
        box.innerText = ""
    },2000)
}
function failedMsg() {
    let box = document.getElementById('success')
    box.classList.add('register-done','failed')
    box.innerText = "Email already registered!"
    setTimeout(() => {
        box.classList.remove('register-done','failed')
        box.innerText = ""
    },2000)
}

function showUser(){
    let userList = document.getElementById('users')
    userList.innerHTML = ''
    
    users.map((user) => {
    let div = document.createElement('div')
    let name = document.createElement('p')
    let email = document.createElement('p')
    div.classList.add('users','flex')

    name.innerText = user.name
    email.innerText = user.email

    userList.appendChild(div)
    div.appendChild(name)
    div.appendChild(email)
    })
    successMsg()  
} 

function register() {
    let uName = document.getElementById('uname') 
    let uEmail = document.getElementById('email') 
    let tempUser = {
        name : uName.value,
        email : uEmail.value
    }
    let tmp = users.filter((user) => {
        return user.email == tempUser.email 
    })
    //so email cannot be repeated
    if(tmp.length == 0){
        users.push(tempUser)
        showUser()
        console.log(users)
        uName.value = ''
        uEmail.value = ''
    }
    else
        failedMsg()
}