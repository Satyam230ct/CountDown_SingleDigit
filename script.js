var countInterval;

function startCounter(){
    var number=parseInt(document.getElementById("number").value);
    // console.log(number);
    if(isNaN(number))
    {
        alert("Please Enter a Number");
        clearInterval(countInterval); return;
    }
    if(number<1 || number>9)
    {
        alert("Range out of bounds");
        clearInterval(countInterval);    return;
    }
    var currentNo=document.getElementsByClassName("current")[0];
    var nextNo=document.getElementsByClassName("next")[0];
    var count=0;

    //If User Click's 'Start Counter again *-* remove this function 
    // and below 2 lines if you don't consider this situation
    resetNumbers(currentNo,nextNo);

    // Clear The Previous Interval That Was Running
    clearInterval(countInterval);

    countInterval=setInterval(function(){
        if(count==number)
        {
            clearInterval(countInterval);
            alert("counter has stoped");    return;
        }
        increaseCount(currentNo,nextNo);
        count++;
    },1000);
}
function resetNumbers(currentNo,nextNo)
{
    currentNo.innerText=0; nextNo.innerText=1;
}

function increaseCount(currentNo,nextNo)
{
    nextNo.classList.add("animate");
    setTimeout(function(){
        currentNo.innerText=nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText=parseInt(nextNo.innerText)+1;
    },500);

}