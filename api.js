let loadData=()=>{
   fetch('https://f24-1-mid-1.vercel.app/content')
   .then(nayeem=>nayeem.json())
   .then(data=>showData(data))
}

const showData=(values)=>{
    const mainDiv = document.getElementById('container');
    for(const value of values){
        const {author,category,title,description,comment_count,time} = value
        // console.log(value)
        const div = document.createElement('div')
        div.innerHTML=`<div class="card bg-base-100 w-96 shadow-2xl">
  <div class="card-body">
    <h2 class="card-title">${author.name}</h2>
    <img
      src= 
"https://i.ibb.co.com/LQWbSfM/6.jpg"
      alt="Shoes" />
    <p>${category}</p>
    <p>${title}</p>
    <p>${description}</p>
    <p>${comment_count}</p>
    <p>${time}</p>
    <div class="card-actions justify-end">
      <button onclick='handleclick(${JSON.stringify(value)})' class="btn btn-primary">Add</button>
    </div>
  </div>
</div>
        
        `

        
  
        
        
        mainDiv.appendChild(div)
        
        
    }

}
const handleclick=(values)=>{
    // console.log('values')
    const {author,category,title,description,comment_count,time} = values
    const main69 = document.getElementById('main69')
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card bg-base-100 w-96 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">${author.name}</h2>
    <p>${title}</p>
    <p>$${description}</p>
    <p>${comment_count}</p>
    <p>${time}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `
    main69.appendChild(div)
    
}

loadData()