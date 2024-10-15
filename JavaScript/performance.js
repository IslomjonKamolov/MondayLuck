const steps_dropdown = document.querySelectorAll('.steps__dropdown')
const steps_dropdown_main = document.querySelectorAll('.steps__dropdown--main')
const dropdown_arrow = document.querySelectorAll('.steps__dropdown--arrow')
const dropdown_text = document.querySelectorAll('.steps__dropdown--text')

const dropdownFun = () => {
    steps_dropdown.forEach((item, idx) => {
        item.addEventListener('click', () => {
            steps_dropdown_main.forEach((mainItem, mainIdx) => {
                if (mainIdx !== idx) {
                    mainItem.style.marginBottom = '0'
                    dropdown_arrow[mainIdx].style.transform = 'rotate(0deg)'
                    dropdown_text[mainIdx].style.height = '0'
                    dropdown_text[mainIdx].style.transition = 'all 0.3s'
                }
            })

            const currentHeight = parseInt(dropdown_text[idx].style.height) || 0;

            if (currentHeight === 0) {
                if (window.innerWidth <= 768) {
                    steps_dropdown_main[idx].style.marginBottom = '11px'
                } else {
                    steps_dropdown_main[idx].style.marginBottom = '10.5px'
                }
                dropdown_arrow[idx].style.transform = 'rotate(180deg)'
                dropdown_text[idx].style.height = dropdown_text[idx].scrollHeight + 'px'
                dropdown_text[idx].style.transition = 'all 0.3s'
            } else {
                steps_dropdown_main[idx].style.marginBottom = '0'
                dropdown_arrow[idx].style.transform = 'rotate(0deg)'
                dropdown_text[idx].style.height = '0'
                dropdown_text[idx].style.transition = 'all 0.3s'
            }
        })
    })
}

dropdownFun()
