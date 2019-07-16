import './index.scss';
import Loading from './components/loading';
import BagPage from './pages/bag';
import BagService from './services/bag-service';

const body = document.querySelector('body');

const init = async function(bagId) {

    let bag = await renderBag(bagId);

    const removeBtn = document.querySelectorAll('.remove-btn');
    const productCard = document.querySelectorAll('.product-card');
    const totalPrice = document.querySelector('.total-price');
    
    renderTotal(totalPrice, bag);

    removeBtn.forEach( (item, index) => {
        
        item.addEventListener('click', () => {
            let itemId = item.getAttribute('data-id');
        
                    deleteItem(bagId, itemId) 
                   
                   // .pop(updateQuantity(itemId));
                    //bag.items = bag.items.reduce(getNewItems(itemId), []);

                    productCard[index].remove();
                    renderTotal(totalPrice, bag);
        });
    });

}


const renderBag = async (bagId) => {
    let bag;

    try {
        bag = await BagService.getBagByIdAsync(bagId);
    } catch (err) {
        return '<div class="error">Error loading bag items...</div>';
    }

    body.innerHTML = Loading();
    body.innerHTML = await BagPage(bag);

    return bag;
}

const deleteItem = async (bagId, itemId) => {
    try {
        await BagService.deleteItemByIdAsync(bagId, itemId);
    } catch (err) {
        return '<div class="error">Error loading bag items...</div>';
    }
}

function renderTotal(totalPrice, bag) {
    totalPrice.innerHTML = Math.round(getTotal(bag.items) * 100) / 100;
}


// export function updateQuantity(itemId) {
//     return (quantityItems, item) => {
//         if (item.id !== itemId) { quantityItems.push(item); }
//         return quantityItems;
//     };
// }

export function getTotal(items) { 
    let total = items.map(item => item.price).reduce((base, cur) => Number(base) + Number(cur), 0)  
    return total;
}


init('bag1');
