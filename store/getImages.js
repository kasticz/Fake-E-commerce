

export default async function getImages(array){
    let arr = [];
    for(let item of array){        
        let imagePath
        await import(`../assets/images${item}`).then((data)=>{
            imagePath = data.default.src
        })
        arr.push(imagePath)
    }
    return arr;
}

