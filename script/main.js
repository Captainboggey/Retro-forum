const loadData = async()=>{
    const res = await fetch(` https://openapi.programming-hero.com/api/retro-forum/posts`)
    const data = await res.json();
    // console.log(data)
    const posts =data.posts
    displayData(posts)
}


const displayData = (data)=>{
    // console.log(data)
    const cardSection = document.getElementById('card-section')
    

    data.forEach(data=>{
      const isActive = data.isActive;
      // greenOrRed(isActive)
      

        // console.log(data)
         const card = document.createElement('div');
         
        //  console.log(isActive)
         
         card.classList="card card-side bg-base-100 shadow-xl ";
         card.innerHTML=`
          <figure>
              <img
                src="${data.image}"
                alt="Movie" />
                <div>
                 <div id="green-dot" class="hidden"> 
                <img   src="/images/green.png"  alt="">
                </div>
               <div id="red-dot" class="hidden"> 
                <img   src="/images/red.png"  alt="">
                </div>
            </figure>
            <div class="card-body">
              <div class="flex gap-2">
              <h1>#${data.category}</h1> <h1>Author: ${data.author.name}</h1>
            </div>
              <h2 class="card-title">${data.title}</h2>
              <p>${data.description}</p>
              <hr>
              <div class="flex">
                <p><img src="/images/comment.svg" alt=""> ${data.comment_count}</p>
                <p><img src="/images/eye.svg" alt=""> ${data.view_count}</p>
                <p><img src="/images/time.svg" alt=""> ${data.posted_time}</p>
              </div>
              
              <div class="card-actions justify-end">
                <button onclick="titleSection('${data.title}','${data.view_count}')" class="btn "><img src="/images/email 1.svg" alt=""></button>
              </div>
            </div>


         
         `
         
       
       
         cardSection.appendChild(card)


    });
   
  
}

// const greenOrRed = (active)=>{
//   const greenDot = document.getElementById('green-dot');
//   const redDot = document.getElementById('red-dot');
//   // console.log(greenDot)
//   console.log(active);
//   if(active===true){
//     greenDot.classList.remove('hidden');
//   }else{
//     redDot.classList.remove('hidden')
    
//   }
  
// }

const titleSection=(title,view)=>{
  console.log(title,view);
  const titleSection =document.getElementById('title-section')
  const newTitle = document.createElement('div');
  newTitle.classList =`card card-side bg-base-100 shadow-xl p-4 `;
  newTitle.innerHTML =`
  <div class="flex gap-5">
  <div>

  <p>${title}</p>
  
  
  </div>
  <div class="flex">
  <img src="/images/eye.svg" alt="">
  
  <p>${view}</p>
  
  
  </div>
  
  
  
  
  </div>
  
  `
titleSection.appendChild(newTitle)


}

loadData()
let count =0;
function clickCount(){
 

  let display = document.getElementById('clickCount');
  count++;
  console.log(count)
  display.innerHTML=count;
}
