// 1) Задача
const getNumbers = text => {
    let result = []
    for (let i = 0; i < text.length; i++) {
        let symbol = text[i]
        if (!isNaN(symbol) && symbol !== ' ') {
            result.push(Number(symbol))
        }
    }
    return result
}

console.log(getNumbers("a1fg5hj6")) // [1, 5, 6]

// 2) Задача
const showFibonacci = (a = 0, b = 1) => {
    if (a > 144) return
    console.log(a)
    setTimeout(() => {
        showFibonacci(b, a + b)
    }, 1000)
}

document.querySelector('.btn-fib').addEventListener('click', () => showFibonacci())

// 3) Задача
const loadProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const items = await response.json()
        items.forEach(item => console.log(item.title))
    } catch (error) {
        console.error(error)
    }
}

document.querySelector('.btn-load').addEventListener('click', loadProducts)

// 4) Делегирование: клик по кнопке меняет цвет фона body
const colorList = document.querySelector('.color-list')

colorList.addEventListener('click', event => {
    if (event.target.classList.contains('color-btn')) {
        document.body.style.backgroundColor = event.target.textContent
    }
})

// 5) Задача
const box = document.querySelector('.box')
const toggleBtn = document.querySelector('.btn-toggle')

toggleBtn.addEventListener('click', () => {
    let hidden = box.style.display === 'none'
    box.style.display = hidden ? 'block' : 'none'
    toggleBtn.textContent = hidden ? 'Скрыть' : 'Показать'
})

// 6) Задача
let count = 0
const numberBox = document.querySelector('.number')

const timer = setInterval(() => {
    numberBox.textContent = count
    count++
    if (count > 100) clearInterval(timer)
}, 1)

// 7) Задача
document.querySelector('.btn-json').addEventListener('click', async () => {
    try {
        const response = await fetch('data/data.json')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
})
