import './index.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ProductsList from '../../components/products-list';

const BagPage = async (bag) => {

    return `<div class="page">
                ${Header(bag.items)}
                ${ProductsList(bag.items)}
                ${Footer()}
            </div>`;
}

export default BagPage;
