import { useNavigate } from 'react-router-dom';

import CompanyForm from 'components/views/company-form/CompanyForm';

import './CreateCompanyPage.scss';

const CreateCompanyPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className='create-company-page'>
            <p className='create-company-page__back' onClick={() => navigate(-1)}>{`<- назад`}</p>
            <CompanyForm />
        </div>
    );
};

export default CreateCompanyPage;
