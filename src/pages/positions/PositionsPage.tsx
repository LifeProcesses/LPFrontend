import PositionCreateForm from 'components/views/position-create-form/PositionCreateForm';
import PositionsList from 'components/views/positions-list/PositionsList';

import './PositionsPage.scss';

const PositionsPage: React.FC = () => {
    return (
        <div className='positions-page'>
            <PositionCreateForm />
            <PositionsList />
        </div>
    );
};

export default PositionsPage;
