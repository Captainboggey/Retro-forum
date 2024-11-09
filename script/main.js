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
        console.log(data)
         const card = document.createElement('div');
         card.classList="card card-side bg-base-100 shadow-xl ";
         card.innerHTML=`
          <figure>
              <img
                src="${data.image}"
                alt="Movie" />
                <div>
                <img src="/images/green.png" alt="">
                <img class="" src="/images/red.png" alt="">
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
                <button class="btn "><img src="/images/email 1.svg" alt=""></button>
              </div>
            </div>
         
         `
         cardSection.appendChild(card)

    });

}

loadData()