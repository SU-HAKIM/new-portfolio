const axios = require('axios');
const title = document.getElementById('title')
const author = document.getElementById('author')
const isbn = document.getElementById('isbn')
const form = document.getElementById('book-form')
const submit = document.getElementById('submit')
const tbody = document.getElementById('book-list')
const url = 'http://localhost:3000/books'

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let obj = {
        title: title.value,
        author: author.value,
        isbn: isbn.value
    };
    // post request
    axios.post(url, obj)
        .then(res => {
            let sin = res
            let tr = document.createElement('tr')
            tr.className = 'font-weight-bolder'
            tr.id = sin.data.id
            tr.innerHTML = `
                    <td class='title'>${sin.data.title}</td>
                    <td class='author'>${sin.data.author}</td>
                    <td class='isbn'>${sin.data.isbn}</td>
                    <td>
                        <div class="btn-group">
                            <button class="btn btn-primary" class='edit'>Edit</button>
                            <button class="btn btn-danger" class='delete'>Delete</button>
                        </div>
                    </td>
                `
            tbody.appendChild(tr)
            this.reset()
        }).then(() => {
            requestOnWindowLoad.call(this)
        })
})
window.onload = function (e) {
    axios.get(url)
        .then(res => {
            res.data.forEach(sin => {
                let tr = document.createElement('tr')
                tr.id = sin.id
                tr.className = 'font-weight-bolder'
                tr.innerHTML = `
                    <td class='title'>${sin.title}</td>
                    <td class='author'>${sin.author}</td>
                    <td class='isbn'>${sin.isbn}</td>
                    <td>
                        <div class="btn-group">
                            <button class="btn btn-primary" class='edit'>Edit</button>
                            <button class="btn btn-danger" class='delete'>Delete</button>
                        </div>
                    </td>
                `
                tbody.appendChild(tr)
            })
        }).then(() => {
            requestOnWindowLoad.call(this)
        }).catch(err => {
            console.log(err)
        })
        .catch(err => {
            console.log(err)
        })
}
// function of all task
function requestOnWindowLoad() {
    axios.get(url)
        .then(res => {
            let sin = res.data
            sin.forEach(sin => {
                let firstTd = document.getElementById(sin.id)
                let edit = firstTd.querySelector('.btn-primary')
                let del = firstTd.querySelector('.btn-danger')
                del.addEventListener('click', function (e) {
                    deleteData.call(this, this, sin.id)
                })
                edit.addEventListener('click', function (e) {
                    editData.call(this, this, sin.id)
                })
            })
        })
}
// function of buttons

function editData(data, sinId) {
    let readyTitle = document.querySelector('.title')
    let readyAuthor = document.querySelector('.author')
    let readyIsbn = document.querySelector('.isbn')
    title.value = readyTitle.textContent
    author.value = readyAuthor.textContent
    isbn.value = readyIsbn.textContent
    // removing data
    let id = data.parentElement.parentElement.parentElement.id
    if (id == sinId) {
        axios.delete(`${url}/${id}`)
            .then(() => {
                this.parentElement.parentElement.parentElement.remove()
            }).catch((err) => {
                console.log(err)
            })
    }
}
function deleteData(data, sinId) {
    let id = data.parentElement.parentElement.parentElement.id
    if (id == sinId) {
        axios.delete(`${url}/${id}`)
            .then(() => {
                this.parentElement.parentElement.parentElement.remove()
            }).catch((err) => {
                console.log(err)
            })
    }
}
