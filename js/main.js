let links = document.querySelector('.links');
links.addEventListener('click', function(e) {
        let ul = document.querySelector('.ul');
        ul.classList.add('open')
        let x = document.querySelector('.x i')
        if(e.target === x) {
                ul.classList.remove('open')
        }
})




// start nav bullet
let bullets = document.querySelectorAll('.nav-bullets .bullet');
let linksA = document.querySelectorAll('.links a')
function smoothScroll(element) {
        element.forEach(ele => {
                ele.addEventListener('click', (e) => {
                e.preventDefault()
                document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
        })
})
})
}
smoothScroll(bullets);
smoothScroll(linksA);
// end nav bullet



window.onscroll = function () {
        let windowHeight = this.innerHeight;
        let windowScrollTop = this.scrollY;
        // start aboutus section animation
        let features = document.querySelector('.features');
        let featuresTop = features.offsetTop;
        let featuresHeight = features.offsetHeight;
        if (windowScrollTop > (featuresTop + featuresHeight - windowHeight )) {
                let allFeatures = document.querySelectorAll('.features .feat');
                allFeatures.forEach((e) => {
                        e.classList.add('translate')
                })
        }
        let services = document.querySelector('.services');
        let servicesTop = services.offsetTop;
        let servicesHeight = services.offsetHeight;
        if (windowScrollTop > (servicesTop + servicesHeight - windowHeight -200 )) {
                document.querySelector('.cool-acc').classList.add('translate');
        }
        let portfolio = document.querySelector('.portfolio');
        let portfolioTop = portfolio.offsetTop;
        let portfolioHeight = portfolio.offsetHeight;
        if (windowScrollTop > (portfolioTop + portfolioHeight - windowHeight -1400)) {
                let allCards = document.querySelectorAll('.portfolio-content .card')
                allCards.forEach((e) => {
                        e.classList.add('translate');
                })
        }
        let about = document.querySelector('.about');
        let aboutTop = about.offsetTop;
        let aboutHeight = about.offsetHeight;
        if (windowScrollTop > (aboutTop + aboutHeight - windowHeight -100)) {
                document.querySelector('.cool-acc2').classList.add('translate');
        }
        

}
