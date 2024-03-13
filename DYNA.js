const accordionBtns = document.querySelectorAll('.accordion');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        content.classList.toggle('active');

        const allContents = document.querySelectorAll('.content');
        allContents.forEach(otherContent => {
        if (otherContent !== content) {
            otherContent.classList.remove('active');
        }
        });
    });
    });
