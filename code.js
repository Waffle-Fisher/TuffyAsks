var reply= document.getElementById("reply");
reply.addEventListener("click", function(){
    var replyBoxValue= document.getElementById("reply-box").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(replyBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});