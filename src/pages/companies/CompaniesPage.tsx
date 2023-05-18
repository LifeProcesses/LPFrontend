import React from 'react';

import CompaniesList from 'components/views/companies-list/CompaniesList';

import './CompaniesPage.scss';

const CompaniesPage: React.FC = () => {
    return (
        <div className='companies-page'>
            <CompaniesList />
        </div>
    );
};

export default CompaniesPage;
