data = {
    '2': 'Воду через себя пропускает,<br>Белье вращает, как вихрь тесный,<br>Грязь и запах с легкостью сносит,<br>Вещи чистые, белоснежные отдает.',
    '3': 'В углу стоит, место тесное занимает,<br>Суетятся все, когда что-то зудит.<br>Шум и суета, аромат не самый приятный,<br>Все оттуда выходят и приходят вновь.',
    '4': 'Он умеет показывать множество миров,<br>Хоть и сам он неподвижен в углу.<br>Изображения яркие, звуки прозрачны,<br>Умней он становится, технологий жив юнга.',
    '5': 'Стоит она,<br>Не камень, не растение, не стена.<br>Изменить путь ты можешь, как заклинанье,<br>На нажатие откроется ей путь к тайнам.'
}

function correct(btn, paragraph, val) {
    btn.style.background = 'green'
    setTimeout(() => {
        let seconds = 30
        timerInterval = setInterval(function() {
        seconds--
        btn.innerHTML = seconds
        if (seconds == 0) {
            clearInterval(timerInterval)
            paragraph.innerHTML = data[val]
            paragraph.setAttribute('data-ex', val)
            btn.style.background = ''
            btn.innerHTML = 'Проверка'
            document.querySelector('input').value = ''
        }
        }, 1000)
    }, 1000)
}

function wrong(btn) {
    btn.style.background = 'red'
    btn.classList.add('shake')
    setTimeout(() => {
        btn.classList.remove('shake')
        btn.style.background = 'black'
    }, 500)
}

document.querySelector('button').addEventListener('click', function () {
    const paragraph = document.querySelector('p')
    const input = document.querySelector('input').value.toLowerCase().replace(/\s/g, '')
    const ex = paragraph.getAttribute('data-ex')
    const btn = document.querySelector('button')
    if (ex == '1') {
        if (input == 'переноска') {
            correct(btn, paragraph, '2')
        } else {
            wrong(btn)
        }
    } else if (ex == '2') {
        if (input == 'стиральнаямашина') {
            correct(btn, paragraph, '3')
        } else {
            wrong(btn)
        }
    } else if (ex == '3') {
        if (input == 'туалет') {
            correct(btn, paragraph, '4')
        } else {
            wrong(btn)
        }
    } else if (ex == '4') {
        if (input == 'телевизор') {
            correct(btn, paragraph, '5')
        } else {
            wrong(btn)
        }
    }  else if (ex == '5') {
        if (input == 'дверь') {
            btn.style.background = 'green'
            setTimeout(() => {
                paragraph.innerHTML = 'С днём рождения!'
                paragraph.style = 'font-size: 32px;'
                document.querySelector('input').style = 'display: none;'
                btn.style = 'display: none;'
                document.querySelector('img').style = 'display: block;'
            }, 1000);
        } else {
            wrong(btn)
        }
    }
})