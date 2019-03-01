// var animals = ["Lion", "Tiger", "Puma"];

// console.log(animals.length);

//  // challenge

//  var animal = ["ayam","kambing", "kucing","bebek","beruang","ikan","lumba-lumba"];



// for(var i=0; i<=animal.length; i++)
// {
//     if(i % 2 == 0)
//     {
//         console.log(animal[i] + " ---> Jantan")
//     }
//     else
//     {
//         console.log(animal[i] + "---> Betina")
//     }
// }

var animalsArray = ["lion","horse"];

function  addAnimals(){
    var animalNames = document.getElementById("animalsName").value;
    animalsArray.push(animalsName);
    console.log(animalsArray);
    cetak();
}

function cetak(){
    document.getElementById("PrintAnimalsName").innerHTML="";

    for(var i = 0; i<animalsArray.length; i++)
    {
        var ul = document.getElementById("PrintAnimalsName");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(animalsArray[i]));
        ul.appendChild(li);
    }
}