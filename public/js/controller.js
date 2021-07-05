document.getElementById('lg').addEventListener('click',(e)=>{
    e.preventDefault()
    var n=document.getElementById('uname').value
    var p=document.getElementById('upass').value
    var url="/lchecker?uname="+n+"&upass="+p
    window.location.replace(url)
})
document.getElementById('sg').addEventListener('click',(e)=>{
    window.location.replace('/signup')
})
function dec(e){
    e.style.color="red"
}