const Header = (title, date, temp) => {
  const headerDiv = document.createElement('div')
  const dateSpan = document.createElement('span')
  const titleHeader = document.createElement('h1')
  const temperature = document.createElement('span')

headerDiv.classList.add('header')
dateSpan.classList.add('date')
temperature.classList.add('temp')

headerDiv.appendChild(dateSpan)
headerDiv.appendChild(titleHeader)
headerDiv.appendChild(temperature)

dateSpan.textContent = date
titleHeader.textContent = title
temperature.textContent = temp


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  //document.querySelector('.header-container').appendChild(headerDiv)
  return headerDiv
}

const headerAppender = (selector) => {
document.querySelector(selector).appendChild(Header())
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
