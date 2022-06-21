const brandLogo = document.querySelector('.brand-logo-border');
const transferBtn = document.querySelector('.article-footer button');
const textarea = document.querySelector('.article-body-textarea textarea');
const pre = document.querySelector('.article-body pre');
const arrowbtn = document.querySelector('.button-url button');
const input = document.querySelector('.input-url input');

brandLogo.onclick = () => {
    // alert("로고 클릭되었음.");
    // location.href="https://papago.naver.com"  //history가 있어서 뒤로가기 이전페이지로 가는게 가능함.
    // location.replace("https://papago.naver.com"); // history가 날라가서 뒤로가기 이젠페이지로 가는게 불가.
    location.href = "http://127.0.0.1:5500/Papago-CloneCoding/historyback.html";
}

transferBtn.onclick = () => {
    pre.textContent = textarea.value;
}

textarea.onkeyup = () => {
    pre.textContent = textarea.value;
}

arrowbtn.onclick = () => {
    let protocols = new Array();
    protocols.push("http://");
    protocols.push("https://");

    for(let i = 0; i < protocols.length; i++) {
        if(input.value.includes(protocols[i])) {
            location.href = input.value;
            return;
        }
    }
    console.log(protocols);

    location.href = "http://" + input.value;
}

input.onkeypress = () => {
    if(window.event.keyCode == 13) {
        arrowbtn.click();
    }
}