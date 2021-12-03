
import axios from 'axios'

const Card = (article) => {

  const bigCard = document.querySelector('.cards-container')

article.forEach(obj => {
  const card = document.createElement('div')
card.classList.add('card')

bigCard.appendChild(card)

  const headline = document.createElement('div')
  headline.classList.add('headline')
  card.appendChild(headline)
  headline.textContent = obj.headline

  
  const author = document.createElement('div')
  author.classList.add('author')
  card.appendChild(author)

    const container = document.createElement('div')
  container.classList.add('img-container')
  author.appendChild(container)

  const image = document.createElement('img')
  image.src = obj.authorPhoto
  container.appendChild(image)

  const span = document.createElement('span')
  span.textContent = obj.authorName
  author.appendChild(span)
});

  document.querySelector('.cards-container').addEventListener('click', () => {
    document.querySelector('.cards-container')
   console.log(headline)
  })
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

//document.querySelector('.cards-container').appendChild(card)
  //return card
}

const cardAppender = (selector) => {
axios.get('http://localhost:5000/api/articles')
.then(resp => {
const javascript = resp.data.articles.javascript
const bootstrap = resp.data.articles.bootstrap
const technology = resp.data.articles.technology
const jquery = resp.data.articles.jquery
const node = resp.data.articles.node
const merged = [...javascript, ...bootstrap, ...technology, ...jquery, ...node]
Card(merged);

});
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
