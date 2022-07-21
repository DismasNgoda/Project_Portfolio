// submission form
const submission = document.getElementById('submission')
const projoName = document.getElementById('project-name')
const subject = document.getElementById('subject')
const description = document.getElementById('description')


submission.addEventListener('submit', (e) => {
    e.preventDefault();

    formSubmission()
})

// validate form 
let validate = isValid;

    
let formSubmission = () => {
    if (projoName == '' && subject == '' && description == '') {
        console.log('inputs cannot be empty')
    } else {
        console.log('you can proceed!')
    }
}






















