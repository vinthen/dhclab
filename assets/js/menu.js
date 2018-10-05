/* ==================== Menu ==================== */
export const menuControl = (wrapper) => {

    wrapper.querySelector('.hamburger').addEventListener('click',() => {

        wrapper.classList.toggle('expand');      

    });

    wrapper.querySelector('.menu--overlay').addEventListener('click',() => {

        wrapper.classList.remove('expand');      

    });

    wrapper.querySelector('.backTop').addEventListener('click',() => {

        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });    

    });


    

}