function newImage(imageurl, left, bottom, ){
    let greenCharacter = document.createElement('img')
    greenCharacter.src = imageurl;
    greenCharacter.style.position = 'fixed';
    greenCharacter.style.left = left;
    greenCharacter.style.bottom = bottom;
    document.body.append(greenCharacter);
    return greenCharacter;
}

function newItem(imageurl, left, bottom) {
    let greenCharacter = newImage(imageurl, left, bottom)


    greenCharacter.addEventListener('dblclick', () =>{
         greenCharacter.remove()
    })
}

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

newItem('assets/sheild.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')
newItem('assets/sword.png', '500px', '405px')