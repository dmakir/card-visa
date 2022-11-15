

$('.btn').click(function(){
    inpNumber();
    inpName();
    inpDate();
    inpCVV();
})

const inpNumber=()=>{
    let input=document.getElementById('num');
    let label=document.getElementById('labNum');
    if(label!=null && input!=null){
        label.innerHTML=input.value;
    }

}


const inpName=()=>{
    let input=document.getElementById('name');
    let label=document.getElementById('labName');
    if(label!=null && input!=null){
        label.innerHTML=input.value;
    }
}

const inpDate=()=>{
    let input=document.getElementById('date');
    let label=document.getElementById('labDate');
    if(label!==null && input!==null){
        label.innerHTML=input.value;
    }
}

const inpCVV=()=>{
    let input=document.getElementById('cvv');
    let label=document.getElementById('labCVV');
    if(label!==null && input!==null){
        label.innerHTML=input.value;
    }
}


const valid=(x)=>{
    let reg=/\d{3}/
    console.log(reg.test(x));
}
valid('');

