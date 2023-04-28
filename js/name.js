var output= document.querySelector("#output");
var btn = document.querySelector('#btn');
btn.addEventListener('click', btnClick);



function btnClick(e){
    e.preventDefault();
    btn.style.backgroundColor='black';
    btn.style.color='rgb(43, 200, 248)';
    btn.innerHTML="clicked";
    output.innerHTML="<h2><b>  Hi, My name is Oluborode Akintunde Paul a Software Developer experienced in developing and maintaining mobile/web applications with Flutter and Reactjs.  </b></h2> <br> <i>click here to view my</i> <a href='http://my-project-link.vercel.app'>projects</a>";
    h1.textContent="Full Name";
    h1.style.fontFamily='monospace';
console.log(output);
}
