import OrderUploader from 'components/views/order-uploader/OrderUploader';

import './OrderPage.scss';

const OrderPage: React.FC = () => {
    return (
        <div className='order-page'>
            <OrderUploader />
        </div>
    );
};

export default OrderPage;
