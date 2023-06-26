import { useGetCompaniesListQuery } from 'api/routes/companiesApi';
import { useGetPositionsListQuery } from 'api/routes/positionsApi';
import { useGetStudentsListQuery } from 'api/routes/studentsApi';

import StudentsTable from 'components/views/students-table/StudentsTable';
import StudentsFilters from 'components/views/students-table-filter/StudentsFilters';

const StudentsPage: React.FC = () => {
    // const { isLoading: isStudentsLoading } = useGetStudentsListQuery();
    // useGetCompaniesListQuery();
    // useGetPositionsListQuery();

    return (
        <>
            <StudentsFilters />
            <StudentsTable />
        </>
    );
};

export default StudentsPage;
