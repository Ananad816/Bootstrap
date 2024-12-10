function add(){
    let a=document.getElementById("d1").value
    let b=document.getElementById("d2").value
    let sum=parseFloat(a)+parseFloat(b)
    document.getElementById("d3").value=sum
    document.getElementById("d1").value=""
    document.getElementById("d2").value=""

}

function sub(){
    let n=document.getElementById("d1").value
    let m=document.getElementById("d2").value
    let sub=parseFloat(n) - parseFloat(m)
    document.getElementById("d3").value=sub

    document.getElementById("d1").value=""
    document.getElementById("d2").value=""

}

// function for multiple the two number
function mul(){
    let x=document.querySelectorAll("#d1")[0].value
    let y=document.querySelectorAll("#d2")[0].value
    let mul=parseFloat(x)*parseFloat(y)
    document.querySelector("#d3").value=mul

    document.getElementById("d1").value=""
    document.getElementById("d2").value=""
}
// function  for find the quotient 

function div(){
    let x=document.querySelectorAll("#d1")[0].value
    let y=document.querySelectorAll("#d2")[0].value
    let quotient  =parseFloat(x)/ parseFloat(y)
    document.querySelector("#d3").value=quotient 

    document.getElementById("d1").value=""
    document.getElementById("d2").value=""
}
function mol(){
    let x=document.querySelectorAll("#d1")[0].value
    let y=document.querySelectorAll("#d2")[0].value
    let rem=parseFloat(x)% parseFloat(y)
    document.querySelector("#d3").value=rem

    document.getElementById("d1").value=""
    document.getElementById("d2").value=""
}

// this code for move cursor from box-1 to box-2
document.getElementById("d1").addEventListener("keypress",function(addmsg){

    if(addmsg.key=="Enter"){
        addmsg.preventDefault()
        document.getElementById("d2").focus()

    }
})
// this code for move cursor form box-2 to add buttom
document.getElementById("d2").addEventListener("keypress", function(msg){
    if(msg.key=="Enter"){
        msg.preventDefault()
        document.getElementById("addbtm").focus()
    }
})
// this is code for move cursor from add buttom right side sunbtm
document.getElementById("addbtm").addEventListener("keydown", function(msg1){
    if(msg1.key=="ArrowRight"){
        msg1.preventDefault()

        document.getElementById("subbtm").focus()
    }

})
// this code for move cursor from subbtm to left side add buttom

document.getElementById("subbtm").addEventListener("keydown", function(msg1){
    if(msg1.key=="ArrowLeft"){
        msg1.preventDefault()

        document.getElementById("addbtm").focus()
    }

})

document.getElementById("subbtm").addEventListener("keydown", function(msg2){
    if(msg2.key=="ArrowRight"){
        msg2.preventDefault()

        document.getElementById("mulbtm").focus()
    }

})

document.getElementById("mulbtm").addEventListener("keydown", function(msg2){
    if(msg2.key=="ArrowLeft"){
        msg2.preventDefault()

        document.getElementById("subbtm").focus()
    }

})

document.getElementById("mulbtm").addEventListener("keydown", function(msg3){
    if(msg3.key=="ArrowRight"){
        msg3.preventDefault()
        document.getElementById("divbtm").focus()
    }
})

document.getElementById("divbtm").addEventListener("keydown",function(sadi){
    if(sadi.key=="ArrowLeft"){
        sadi.preventDefault()
        document.querySelector("#mulbtm").focus()
    }

})

document.getElementById("divbtm").addEventListener("keydown", function(sadi){
    if(sadi.key=="ArrowRight"){
        sadi.preventDefault()
        document.getElementById("molbtm").focus()
    }

})

document.getElementById("molbtm").addEventListener("keydown", function(sadi){
    if(sadi.key=="ArrowLeft"){
        sadi.preventDefault()
        document.getElementById("divbtm").focus()
    }

})

document.getElementById("d2").addEventListener("keyup",function(job){
    if(job.key=="ArrowUp"){
        job.preventDefault()
            document.getElementById("d1").focus()
        
    }

})

document.getElementById("d1").addEventListener("keyup",function(job){
    if(job.key=="ArrowDown"){
        job.preventDefault()
            document.getElementById("d2").focus()
         
         }

})