import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import CompaniesList from 'components/views/companies-list/CompaniesList';

import './CompaniesPage.scss';

const CompaniesPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className='companies-page'>
            <Button type='primary' className='lp-button_primary' onClick={() => navigate('create')}>
                Добавить компанию
            </Button>
            <CompaniesList />
        </div>
    );
};

export default CompaniesPage;
