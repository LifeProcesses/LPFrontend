import { useGetCompaniesListQuery } from 'api/routes/companiesApi';
import { useGetPositionsListQuery } from 'api/routes/positionsApi';
import { useGetStudentsListQuery } from 'api/routes/studentsApi';

import StudentsTable from 'components/views/students-table/StudentsTable';
import StudentsFilters from 'components/views/students-table-filter/StudentsFilters';

const StudentsPage: React.FC = () => {
    const { isLoading: isStudentsLoading } = useGetStudentsListQuery();
    useGetCompaniesListQuery();
    useGetPositionsListQuery(null);

    return (
        <>
            <StudentsFilters />
            <StudentsTable isLoading={isStudentsLoading} />
        </>
    );
};

export default StudentsPage;
