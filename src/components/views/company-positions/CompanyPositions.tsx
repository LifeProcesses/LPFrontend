import { List, Tag } from 'antd';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import AddPositionForm from './add-position-form/AddPositionForm';

import PositionCard from '../position-card/PositionCard';
import StudentCard from '../student-card/StudentCard';

import { CompanyPositionPayload, StudentInfoPayload } from 'api/Models';
import { useGetCompanyPositionsQuery } from 'api/routes/companiesApi';
import { useLazyGetStudentInfoQuery } from 'api/routes/studentsApi';
// import { COMPANY_POSITIONS_MOCK } from 'helpers/mocks/Companies.mock';
import { STUDENT_INFO_MOCK } from 'helpers/mocks/Students.mock';

import './CompanyPositions.scss';

const CompanyPositions: React.FC = () => {
    const { companyId } = useParams();
    const {
        data: positions,
        isLoading: isPositionsLoading,
        // error: isPositionsError,
    } = useGetCompanyPositionsQuery(parseInt(companyId || ''));
    // const positions = COMPANY_POSITIONS_MOCK;

    const [getStudent, { isFetching: isStudentFetching, isLoading: isStudentLoading }] = useLazyGetStudentInfoQuery();

    const [isPositionCardOpen, setIsPositionCardOpen] = useState<boolean>(false);
    const [currentPosition, setCurrentPosition] = useState<CompanyPositionPayload | null>(null);

    const [isStudentCardOpen, setIsStudentCardOpen] = useState<boolean>(false);
    const [currentStudent, setCurrentStudent] = useState<StudentInfoPayload | null>(STUDENT_INFO_MOCK);

    const handleOpenStudent = useCallback(
        async (id: number) => {
            setIsStudentCardOpen(true);
            if (id !== currentStudent?.id) {
                await getStudent(id)
                    .unwrap()
                    .then((data) => {
                        setCurrentStudent(data);
                    });
            }
        },
        [currentStudent?.id, getStudent],
    );

    return (
        <>
            <div className='company-positions'>
                {positions ? (
                    <>
                        <div className='company-positions__title'>
                            <span>Позиции</span>
                            <Tag className={`lp-tag lp-tag_yellow`}>
                                план {positions.plan} | взяли {positions.taken}
                            </Tag>
                            <AddPositionForm
                                companyId={parseInt(companyId || '')}
                                companyPositions={positions.positions}
                            />
                        </div>
                        <List
                            loading={isPositionsLoading}
                            dataSource={positions.positions}
                            renderItem={(item) => (
                                <List.Item>
                                    <div
                                        className='company-positions__item'
                                        onClick={() => {
                                            setCurrentPosition(item);
                                            setIsPositionCardOpen(true);
                                        }}
                                    >
                                        <span>{item.name}</span>
                                        <Tag className={`lp-tag lp-tag_yellow`}>
                                            план {item.plan} | взяли {item.taken}
                                        </Tag>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </>
                ) : (
                    <></>
                )}
            </div>
            <PositionCard
                position={currentPosition}
                isOpen={isPositionCardOpen}
                onClose={() => setIsPositionCardOpen(false)}
                onClickStudent={handleOpenStudent}
            />
            <StudentCard
                student={currentStudent}
                isOpen={isStudentCardOpen}
                onClose={() => setIsStudentCardOpen(false)}
                isLoading={isStudentLoading || isStudentFetching}
            />
        </>
    );
};

export default CompanyPositions;
