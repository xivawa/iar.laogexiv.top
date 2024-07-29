var text = document.querySelector('.typingtext');
var messages = ["Hello", "Hi", "Hey"];
var index = 0;

function changeText() {
    typingtext.innerHTML = messages[index];
    index = (index + 1) % messages.length;
    setTimeout(changeText, 1000);
}

changeText();

function titleshow() {
    document.getElementById("welcome").style.color = "rgb(255, 255, 255)";
}

function titlehigh() {
    document.getElementById("welcome").style.color = "rgba(255, 255, 255, 0)";
}

function copyIP() {
    // 当函数被调用时，将指定文字(IP地址)复制到剪贴板
    navigator.clipboard.writeText("iar.laogexiv.top");
    alert("IP地址已复制到剪贴板");
}

function copyGroup() {
    // 当函数被调用时，将指定文字(IP地址)复制到剪贴板
    navigator.clipboard.writeText("711163656");
    alert("QQ群号已复制到剪贴板");
}