function loadAlbums (){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res =>res.json())
    .then(data => displayAlbums(data))
}
loadAlbums()


function displayAlbums(album){
    const albumContainer = document.getElementById('id');
    for(const nos of  no){
      const p = document.createElement('div');
     p.innerText = album.url;
       albumContainer.appendChild(p)
    
    }

}
// // const stuInfo = JSON.stringify({ name: "James", roll: 3 }); console.log(stuInfo.name); 
// const premikas= { name: 'keka ferdousi' , cars: { brand: 'toyota'} }
// const {brand} = premikas.cars;
// console.log(brand)