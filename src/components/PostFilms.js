// Создание постов из jsonplaceholder, с возможностью добавления новых.

// создание поста на основе jsonplaceholder
const url = 'https://swapi.dev/api/films/'

let i = 0
async function createPostFromData() {
  try {
    const response = await fetch(url)
    const data = await response.json()
    if (i === 0) console.log(data)
    let div = document.createElement('div')
    div.className = 'post'
    div.innerHTML = `<strong>${data[i].title}: </strong>${
      data[i++].opening_crawl
    }`
    document.body.before(div)
    console.log(i)
    // if (i == 100) createNewPost()
  } catch (e) {
    console.error(e)
  } finally {
  }
}

// создание сотни постов для красоты
async function create(numberOfPosts) {
  for (let b = 0; b < numberOfPosts; b++) {
    createPostFromData()
  }
}
// async function crit() {
//   create(100)
//   if (i == 100) createNewPost()
// }
create(100)

// функция создания нового поста на основе данных введенных пользователем
async function createNewPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: document.getElementById('userAnswerTheme').value,
        body: document.getElementById('userAnswer').value,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const data = await response.json()
    console.log('Hi I am here')
    let div = document.createElement('div')
    div.className = 'post'
    div.innerHTML = `<strong>${data.title}: </strong>${data.body}`
    document.body.before(div)
    document.getElementById('userAnswer').value = ''
    document.getElementById('userAnswerTheme').value = ''
  } catch (e) {
    console.error(e)
  } finally {
  }
}
// старый код

// function createPost() {
//   let div = document.createElement('div')
//   div.className = 'post'
//   div.innerHTML = `<strong>Вася: </strong>Здесь могла быть ваша реклама`
//   document.body.append(div)
// }
// createPost()

// дополнительные наработки для расширения функционала

// function readInt() {
//   return document.getElementById('userAnswer').value
// }

// function write(text) {
//   document.getElementById('info').innerHTML = text
// }

// function hide(id) {
//   document.getElementById(id).style.display = 'none'
// }

// function NewPost() {
//   write(readInt())
//   // hide('userAnswer')
//   // hide('button')
// }

// async function deletePost() {
//   fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
//     method: 'DELETE',
//   })
// }
// deletePost()
