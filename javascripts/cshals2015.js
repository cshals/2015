console.log('cshals2015.js')

cshals2015=function(opt){
    opt+=".html";
    cshals2015.load("javascripts/"+opt,function(h){
        var s = document.getElementById('section')
        s.innerHTML=h
    })
    console.log(opt)
}

cshals2015.load = function(url,fun){ // XMLHttpRequest
    var r = new XMLHttpRequest();
    r.onload=function(x){
        fun(x.target.responseText)
    }
    r.open("GET",url,true);
    r.send();
}

// ini
cshals2015('home')