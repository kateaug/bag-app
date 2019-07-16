import './index.scss';
import closeIcon from '../../assets/remove.svg';

const ProductCard = item => `<div class="product-card">
                <div class="remove-btn" data-id="${item.id}"">
                    <img src="${closeIcon}" />
                </div>
                <div class="image-container">
                    <img class="image" src="${item.image}" />
                </div>
                <div class="info-container alignCenter">
                    <div class="brandName">${item.name}</div>
                    <div class="price">€${item.price}</div>
                </div>
            </div>`;

export default ProductCard;
