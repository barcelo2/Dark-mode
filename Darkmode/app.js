const btn=document.querySelector('.btn')
btn.addEventListener('click',()=>{
    document.documentElement.classList.toggle('dark-theme')
})


const articleContainer=document.querySelector('.articles')

const articleData=articles.map(article=>{
    const{title, date, length, snippet}=article
    const formatDate =moment(date).format('MMMM Do, YYYY')
    return `<article class="post">
    <h2>${title}</h2>
    <div class="post-info">
      <span>${date}</span>
      <span>${length} min read</span>
    </div>
    <p>
      ${snippet}
    </p>
  </article>`
}).join('')

articleContainer.innerHTML=articleData