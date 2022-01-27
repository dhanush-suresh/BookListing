import React from 'react'
import reactDom from 'react-dom'
import './index.css'
// always return JSX
// stateless = dumb
function BookList() {
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}
const Image = () => (
  <img
    src='https://images-eu.ssl-images-amazon.com/images/I/51q1eW5qcsL._AC_SX184_.jpg'
    alt=''
    srcset=''
  />
)
const Title = () => <h1>The White Tiger</h1>
const Author = () => <h2>Aravinda Adiga</h2>
reactDom.render(<BookList />, document.getElementById('root'))
