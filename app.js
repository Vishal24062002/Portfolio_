var tablinks=document.getElementsByClassName("tab-links");
var tablcontents=document.getElementsByClassName("tab-content");
function opentab(tabname){
for(tablink of tablinks){
    tablink.classList.remove("active-link");
}
    for(tablcontent of tablcontents){
    tablcontent.classList.remove("active-tab");
    }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");

}
let sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbx_fgu4X4jiIQ3eK2nxk6QQU9C5--GvrrwCKUqLk2CXuDDk2EwtA0MofeqU5Mwqgz9JCQ/exec'
  const form = document.forms['submit-to-google-sheet']
   const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="Submitted Sucessfully!!";
        setTimeout(function(){
            msg.innerHTML=""
        },1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })