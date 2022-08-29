
    const postData = async  (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers:{'Content-type':'application/json'},
            body: data
        });
        return await res.json();
    }

    
    const getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Все не ок:${url} не доступен, статус:${res.status}`);
        }
        return await res.json();
    }

    export {postData};
    export {getResource};
    
    //  axios.get('http://localhost:3000/menu')
    // .then(data=> {
    //     data.data.forEach(({img, altimg, title, descr, price}) => {
    //         const element = document.createElement('div');
    //         element.classList.add('menu__item');
    //         element.innerHTML = `
    //         <img src=${img} alt=${altimg}>
    //         <h3 class="menu__item-subtitle">${title}</h3>
    //         <div class="menu__item-descr">${descr}</div>
    //         <div class="menu__item-divider"></div>
    //         <div class="menu__item-price">
    //             <div class="menu__item-cost">Цена:</div>
    //             <div class="menu__item-total"><span>${price}</span> руб/день</div>
    //         </div>
    //         `;
    //         document.querySelector('.menu .container').append(element);
    //     });
    // })