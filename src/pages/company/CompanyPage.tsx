import { useNavigate } from 'react-router-dom';

import CompanyDescription from 'components/views/company-details/CompanyDetails';
import CompanyPositions from 'components/views/company-positions/CompanyPositions';

import './CompanyPage.scss';

const CompanyPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className='company-page'>
            <p className='company-page__back' onClick={() => navigate(-1)}>{`<- назад`}</p>
            <CompanyDescription />
            <CompanyPositions />
        </div>
    );
};

export default CompanyPage;
