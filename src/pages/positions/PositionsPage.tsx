import PositionsList from 'components/views/positions-list/PositionsList';

import './PositionsPage.scss';

const PositionsPage: React.FC = () => {
    return (
        <div className='positions-page'>
            <PositionsList />
        </div>
    );
};

export default PositionsPage;
