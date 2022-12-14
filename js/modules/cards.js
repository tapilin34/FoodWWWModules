import {getResource} from '../services/services';
function cards () {
    // Class
    class Card {
        constructor(img,altimg,title,descr,price,parentSelector, ...classes) {
            this.img=img;
            this.altimg=altimg;
            this.title=title;
            this.descr=descr;
            this.price=price;
            this.transfer=27;
            this.parent=document.querySelector(parentSelector);
            this.classes=classes;
            this.changeToRUB();
        }
        changeToRUB() {
            this.price = this.price * this.transfer;
        }
        renderCard(){
            const element = document.createElement('div');
            if(this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className=>{ element.classList.add(className)});
            }
            
            
            element.innerHTML=` 
            <img src=${this.img} alt=${this.altimg}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            </div>
            `;
            this.parent.append(element);
        }
    }


    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new Card(img, altimg, title, descr, price, ".menu .container").renderCard();
            });
        });


    }
export default cards;
export {getResource};