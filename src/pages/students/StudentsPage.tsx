import StudentsTable from 'components/views/students-table/StudentsTable';
import StudentsFilters from 'components/views/students-table-filter/StudentsFilters';

const StudentsPage: React.FC = () => {
    return (
        <>
            <StudentsFilters />
            <StudentsTable />
        </>
    );
};

export default StudentsPage;
