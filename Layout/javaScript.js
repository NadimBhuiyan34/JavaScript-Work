let containerDiv = document.querySelector('.container');
        containerDiv.style.display="flex";
        containerDiv.style.minHeight="100vh";
        containerDiv.style.flexDirection="row";
        containerDiv.style.margin="0";

function header(type)
{
    let contentId=document.getElementById('content');
    let headerDiv= document.createElement('header');
        headerDiv.innerHTML=type;
        headerDiv.setAttribute("style", "box-sizing:border-box;background:#7df58d;height:20vh;padding:1em");
    contentId.appendChild(headerDiv);
}
function navBar(){
    let  navbar= document.createElement('nav');
         navbar.innerHTML="Nav";
         navbar.setAttribute("style", "box-sizing:border-box;background:#d1d8e8;flex:1;padding:1em");
     containerDiv.appendChild(navbar);
}

function content(){
    let content= document.createElement('div');
        content.id="content";
        content.setAttribute("style", "box-sizing:border-box;display:flex;flex-direction:column;flex:5");
 containerDiv.appendChild(content);
}
function footer(){
    let contentId=document.getElementById('content');
    let footerDiv= document.createElement('header');
        footerDiv.innerHTML="Footer";
        footerDiv.setAttribute("style", "box-sizing:border-box;background:#7df58d;height:20vh;padding:1em");
    contentId.appendChild(footerDiv);
}
function aside()
{
    let mainDiv=document.getElementById('main');
    let asideDiv= document.createElement('div'); 
        asideDiv.setAttribute("style","background:white;box-sizing:border-box;flex:1;padding:1em");
        asideDiv.innerHTML="Aside";
    mainDiv.appendChild(asideDiv);
}
function article(n)
{
    let contentId=document.getElementById('content');
    let mainDiv= document.createElement('main');
        mainDiv.id="main";
        mainDiv.setAttribute("style","box-sizing:border-box;display:flex;flex-direction:row");
         
  let articleDiv= document.createElement('article');
        articleDiv.setAttribute("style","box-sizing:border-box;flex:3;background:#ccf0b6;height:60vh;padding:1em");
        articleDiv.innerHTML="Article";
        mainDiv.appendChild(articleDiv);
  contentId.appendChild(mainDiv);
        if(n=="aside")
        {
          
            aside();
            
        }
}

 
function layout_team7()
{
            navBar();
            content();
            header("Header");
            article("aside");
            header("Footer");
}

layout_team7();

