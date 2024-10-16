const requestURL= '../json/dragons.json'; // const significa constante es una variable que nuna cambia, la API nunca cambia//

async function fetchDragonsJson() {
    const response = await fetch(requestURL) // llamo el archivo, en este caso en formato json y requestURL= 'http://localhost:3000/dragons'//
    const dragons = await response.json(); // llamo el archivo, en este caso en formato json//
    return dragons;
}

// llamo la función y luego voy uno por uno clave: valor, es decir devuelve la información//
fetchDragonsJson().then(dragon => {
        for (let index=0; index < dragon.dragons.length; index++) {

        let id= dragon.dragons[index].id;
        let image= dragon.dragons[index].image;
        let price= dragon.dragons[index].price;
        let city= dragon.dragons[index].city;
        let description= dragon.dragons[index].description;
        //console.log(price);//
        //console.log(id,image,price,city,description);//
        //Luego de colocar las variables se imprime en html: header, main y footer, en el main coloco un div una sección con id dragonSection//
        
        // debe ir el + para Q imprima todos los datos en html//
        // puede ser p o a, o div, puede usarse cualuier etiQueta de html//
        // Colocar ` `//
        
        dragonSection.innerHTML += ` 
        
           <div>id. ${id}</div>
           <p> El precio es: ${price}</p> 
           <img src="${image}" alt="">
           <p> Esta en ${city}</p>
           <div> Info : ${description}</div>
        `
    }

})   

// Luego coloco en la terminal git add . , git commit -m 'add innerHTML', y luego git push//