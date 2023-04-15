/*<div class="form-box " id="other">
                <span class="material-symbols-sharp icon">height</span>
                <div class="form-box-input">
                    <input class="form-input" type="number" name="Thickness" id="thickness" value="" required placeholder=" ">
                    <label for="" class="form-label">Thickness</label>
                </div>
            </div>*/

const thickness = document.createElement("div");
thickness.classList="form-box";
thickness.id="other";

const span = document.createElement("span");
span.classList="material-symbols-sharp icon";
span.innerHTML="height";
thickness.append(span);

const div = document.createElement("div");
div.classList="form-box-input";

const input = document.createElement("input");
input.classList="form-input";
input.type="number"
input.name="thickness"
input.id="thickness";
input.value=""
input.required;
input.placeholder=" ";
div.append(input);

const label = document.createElement("label");
label.htmlFor="";
label.className="form-label";
label.innerHTML="Thickness"
div.append(label);

thickness.append(div);

const otherThickness = document.getElementById("wall-thickness7");
const add = document.getElementById("add");
otherThickness.addEventListener("change",function(){
    add.append(thickness);
    if(otherThickness.checked){
        thickness.style.display="flex";
        thickness.style.alignItems="center"
        thickness.style.animation="fadein 1s forwards"
    }else{
        thickness.style.display="none"
        input.removeAttribute('required');
        thickness.remove();
    }
})
document.addEventListener("change",function(){
    if(!otherThickness.checked){
        thickness.style.display="none"
        input.removeAttribute('required');
        thickness.remove();
    }
})