

export default async function getImages(array){
    let result = [];
    for(let item of array){
        let imagePath
        await import(`../assets/images/${item.image}`).then(data => imagePath = data.default.src)
        arr.push({...item,image:imagePath})
    }
    return arr;
}

