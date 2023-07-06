import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CompanyPayload, PositionPayload, StudentPayload } from 'api/Models';
import { companiesApi } from 'api/routes/companiesApi';
import { positionsApi } from 'api/routes/positionsApi';
import { studentsApi } from 'api/routes/studentsApi';
// import { COMPANIES_MOCK } from 'helpers/mocks/Companies.mock';
// import { POSITIONS_MOCK } from 'helpers/mocks/Positions.mock';
import { STUDENTS_MOCK } from 'helpers/mocks/Students.mock';

interface StudentsState {
    students: StudentPayload[];
    filteredStudents: StudentPayload[];
    companies: CompanyPayload[];
    positions: PositionPayload[];
}

const initialState: StudentsState = {
    students: STUDENTS_MOCK,
    filteredStudents: STUDENTS_MOCK,
    // companies: COMPANIES_MOCK,
    // positions: POSITIONS_MOCK.positions,
    // students: [],
    // filteredStudents: [],
    companies: [],
    positions: [],
};

export const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        setFilters: (
            state,
            {
                payload: { name, companies, positions, statuses },
            }: PayloadAction<{ name?: string; companies?: number[]; positions?: number[]; statuses?: string[] }>,
        ) => {
            state.filteredStudents = state.students.filter(
                (student) =>
                    (!name || student.name.includes(name)) &&
                    (!companies || student.companies.some((item) => companies.includes(item.id))) &&
                    (!positions || student.positions.some((item) => positions.includes(item.id))) &&
                    (!statuses || (student.status && statuses.includes(student.status.type))),
            );
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(studentsApi.endpoints.getStudentsList.matchFulfilled, (state, { payload }) => {
            state.students = payload;
            state.filteredStudents = payload;
        });
        builder.addMatcher(companiesApi.endpoints.getCompaniesList.matchFulfilled, (state, { payload }) => {
            state.companies = payload;
        });
        builder.addMatcher(positionsApi.endpoints.getPositionsList.matchFulfilled, (state, { payload }) => {
            state.positions = payload.positions;
        });
    },
});

export const { setFilters } = studentsSlice.actions;

export default studentsSlice.reducer;
