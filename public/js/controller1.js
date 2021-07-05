
document.getElementById('sgn').addEventListener('click',(e)=>{
    e.preventDefault()
    var fp=document.getElementById('upass').value
    var sp=document.getElementById('renpass').value
    if(sp!=fp){
       return window.alert('passwords mismatch during confirmation')
    }
    var m=document.getElementById('umail').value
    var n=document.getElementById('uname').value
    var url="/schecker?umail="+m+"&uname="+n+"&upass="+fp
    window.location.replace(url)

})
function dec(e){
    e.style.color="red"
}