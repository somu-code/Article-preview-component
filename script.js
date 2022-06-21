const shareButton = document.querySelector('.user-share')
const share = document.querySelector('.share-component');
const shareContainer = document.querySelector('.share-container');

shareButton.addEventListener('click', event => {
    share.classList.toggle('display-block');
    shareContainer.classList.toggle('background');
})