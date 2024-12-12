console.log('first');

function aa(){
    console.log('second');
}
aa();
console.log("Third");

function rollnumber(num,time, nextroll){
    setTimeout(
        ()=>{
            console.log("Roll no. is",num);
            if (nextroll) nextroll();
        },time
    )
}
rollnumber(121313,1000,()=>{
    rollnumber(123121,3000);
})