let btn = document.querySelector(".btns")
        btn.addEventListener("click", (e) => {
            let opt = e.target.id
            if (opt) {
                let textarea = document.querySelector("#textarea")
                const text = textarea.value
                if(opt == 'copy')
                    ConvertCase.apply(textarea, opt)
                ConvertCase.apply(text, opt)
            }
        })

        const ConvertCase = {
            apply(text, opt) {
                let converted = ConvertCase[opt](text)
                return textarea.value = converted
            },
            uppercase(text) {
                return text.toUpperCase()
            },
            lowercase(text) {
                return text.toLowerCase()
            },
            capitalizedcase(text) {
                if (text.match(/(\r\n|\n|\r)/gm)) {
                    let converted = []
                    text = text.split('\n')
                        .forEach(element => {
                            if (element)
                                converted.push(element.toLowerCase()
                                    .split(' ')
                                    .map((word) => {
                                        return word[0].toUpperCase() + word.slice(1)
                                    }).join(' '))
                            else
                                converted.push(element)
                        })
                    return converted.join('\n')
                }
                return text.toLowerCase()
                    .split(' ')
                    .map((word) => {
                        return word[0].toUpperCase() + word.slice(1);
                    }).join(' ')
            },
            setencecase(text) {
                if (text.match(/(\r\n|\n|\r)/gm)) {
                    let converted = []
                    text = text.split('\n')
                        .forEach(element => {
                            if (element)
                                converted.push(element[0].toUpperCase() + element.slice(1).toLowerCase())
                            else
                                converted.push(element)
                        })
                    return converted.join('\n')
                }
                return text[0].toUpperCase() + text.slice(1).toLowerCase()
            },
            titlecase(text) {
                if (text.match(/(\r\n|\n|\r)/gm)) {
                    let converted = []
                    text = text.split('\n')
                        .forEach(element => {
                            if (element)
                                converted.push(element.toLowerCase()
                                    .split(' ')
                                    .map((word) => {
                                        return word[0].toUpperCase() + word.slice(1)
                                    }).join(' '))
                            else
                                converted.push(element)
                        })
                    return converted.join('\n')
                }
                return text.toLowerCase()
                    .split(' ')
                    .map((word) => {
                        return word[0].toUpperCase() + word.slice(1)
                    }).join(' ')
            },
            inversecase(text) {
                if (text.match(/(\r\n|\n|\r)/gm)) {
                    let converted = []
                    text = text.split('\n')
                        .forEach(element => {
                            if (element) {
                                word = []
                                element = element.split('')
                                    .forEach((letter, index, array) => {
                                        word.push(index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase())
                                    })
                                converted.push(word.join(''))
                            }
                            else
                                converted.push(element)
                        })
                    return converted.join('\n')
                }
                word = []
                text = text.split('')
                    .forEach((letter, index, array) => {
                        word.push(index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase())
                    })
                return word.join('')
            },
            isUpperCase(letter) {
                if (letter)
                    return letter === letter.toUpperCase()
                return false
            },
            copy(text) {
                text.select()
                text.setSelectionRange(0, 99999)
                document.execCommand("copy")
                alert("Text successfully copied!")
                return text.value
            }
        }