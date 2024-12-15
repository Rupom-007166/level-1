let loadData=()=>{
    fetch('https://f24-1-mid-1.vercel.app/content')
    .then(res=>res.json())
    .then(data=>showData(data))
}


const showData=(values)=>{
    const mainDiv = document.getElementById('container')
    for(const value of values){
        // console.log(value)
        const {author,category,img,comment_count,description,title,view_count} = value;
        const div = document.createElement('div')
        div.innerHTML = `
             <div class="card bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img class="h-[200px] w-full"
      src=${img}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${author.name}</h2>
    <p>${category}</p>
    <p>${img}</p>
    <p>${comment_count}</p>
    <p>${description}</p>
    <p>${title}</p>
    <p>${view_count}</p>
    <div class="card-actions">
      <button id=${author.name} class="btn btn-primary" onclick='add(${JSON.stringify(value)})'>Add</button>
    </div>
  </div>
</div>
        `
        mainDiv.appendChild(div)
    }
}

const add=(clicked)=>{
    const {author,category,img,comment_count,description,title,view_count} = clicked
    // const.changedId=author.name.split('')[0]
    // console.log(author.name.split(''))
    // const changedValue = author.name.split('')[0]
    const ol = document.getElementById('order')
    const li = document.createElement('li')
    const custom = document.getElementById('author.name')
    

    console.log(custom)
    // custom.disabled= true
    li.style.marginLeft= "40px"
    li.style.marginTop= "40px"
    li.innerHTML = `
    <div class="flex justify-evenly">
         <h1 class="font-bold text-xl">${author.name}</h1>
         <img class="h-[50px] w-[80px]" src=${img}/>
    </div>
    
    `
    ol.appendChild(li)

}
loadData()