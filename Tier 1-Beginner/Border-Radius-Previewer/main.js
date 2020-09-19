function changeRadius  () {
    let borderTopLeftRadius = document.getElementById('inputBorderTopLeftRadius').value;
    let borderTopRightRadius = document.getElementById('inputBorderTopRightRadius').value;
    let borderBottomLeftRadius = document.getElementById('inputBorderBottomLeftRadius').value;
    let borderBottomRightRadius = document.getElementById('inputBorderBottomRightRadius').value;
    let roundedSquare = document.getElementById('roundedSquare');
    
    roundedSquare.style.borderTopLeftRadius = borderTopLeftRadius +"px";
    roundedSquare.style.borderTopRightRadius = borderTopRightRadius +"px";
    roundedSquare.style.borderBottomLeftRadius = borderBottomLeftRadius +"px";
    roundedSquare.style.borderBottomRightRadius = borderBottomRightRadius +"px";

    

}