
var header= document.getElementById("header");
            var ms= document.getElementById("BUGGATTI");
            var m3= document.getElementById("DUCATI SUPERLEGGERA v4");
            var mx= document.getElementById("Thar");
            var my= document.getElementById("KAWASAKI NINJA h2r");
            var model= document.getElementById("model");
            var mph= document.getElementById("mph");
            var speed= document.getElementById("speed");
            var range= document.getElementById("range");


            ms.onclick=function(){
                header.style.backgroundImage="url(https://s1.cdn.autoevolution.com/images/news/gallery/the-bugatti-veyron-grand-sport-vitesse-still-is-the-world-s-fastest-production-roadster_3.jpg)";
                model.innerHTML="BUGGATTI";
                mph.innerHTML="2.2s";
                speed.innerHTML="267 km/h";
                range.innerHTML="431 mi";
            }

            
            m3.onclick=function(){
                header.style.backgroundImage="url(https://img.goodfon.com/original/1920x1080/5/14/ducati-red-superleggera-v4-garage.jpg)";
                model.innerHTML="DUCATI SUPERLEGGERA v4";
                mph.innerHTML="2s";
                speed.innerHTML="340 km/h";
                range.innerHTML="600 km";
            }
            mx.onclick=function(){
                header.style.backgroundImage="url(https://stat.overdrive.in/wp-content/uploads/2023/01/Thar1-1-900x506.jpg)";
                model.innerHTML="THAR"
                mph.innerHTML="2.5s";
                speed.innerHTML="155 km/h";
                range.innerHTML="550 km";
            }
            my.onclick=function(){
                header.style.backgroundImage="url(https://img.freepik.com/premium-photo/photo-kawasaki-ninja-h2r_903974-257.jpg)";
                model.innerHTML="KAWASAKI NINJA h2r";
                mph.innerHTML="3.07s";
                speed.innerHTML="400 km/h";
                range.innerHTML="550 km";
            }