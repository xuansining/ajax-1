const loadCss =document.querySelector('#loadCss')
//加载CSS
loadCss.onclick=()=>{
    const request =new XMLHttpRequest()
    request.open('GET','/style.css')
    request.onload=()=>{
        console.log(request.response);
        const style=document.createElement('style')
        style.innerHTML=request.response;
        document.head.appendChild(style)
    }
    request.onerror=()=>{
        
  
    }
    request.send()
}
console.log('hi');
//加载js
loadJS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload=()=>{
        console.log(request.response);
        const div=document.createElement('div')
        div.innerText=request.response;
        document.body.appendChild(div)
    }
    request.onerror=()=>{

    }
    request.send()
}
//加载html
loadHtml.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            console.log(`加载成功`);
            const div1=document.createElement('div')
            div1.innerHTML=request.response;
            document.body.appendChild(div1)

        }
    }
    request.onerror=()=>{

    }
    request.send()

}
//加载XML
loadXML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            console.log(`加载成功`);
            console.log(request.response);
            const div1=document.createElement('div')
            div1.innerHTML=request.response;
            document.body.appendChild(div1)

        }
    }
    request.send()
}
let n=1
loadNext.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            console.log(`加载成功`);
            console.log(request.response);
            const ul=document.createElement('ul')
            const obj=JSON.parse(request.response)
            console.log(obj);
            let str='';
            for(let i=0;i<obj.length;i++){
                 str+=`<li>${obj[i].id}</li>`
            }
            ul.innerHTML=str;
           
            document.body.appendChild(ul)

        }
    }
    request.send()
    n+=1;
    if(n>2){
        loadNext.onclick=null;
    }
}
//加载JSON


