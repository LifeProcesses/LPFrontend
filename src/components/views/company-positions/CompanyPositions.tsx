import { List, Tag } from 'antd';

// import { useParams } from 'react-router-dom';

// import { useGetCompanyPositionsQuery } from 'api/routes/companiesApi';
import { COMPANY_POSITIONS_MOCK } from 'helpers/mocks/Companies.mock';

import './CompanyPositions.scss';

const CompanyPositions: React.FC = () => {
    // const { companyId } = useParams();
    // const {
    //     data: positions,
    //     isLoading: isPositionsLoading,
    //     error: isPositionsError,
    // } = useGetCompanyPositionsQuery(parseInt(companyId || ''));
    const positions = COMPANY_POSITIONS_MOCK;

    return (
        <div className='company-positions'>
            {positions ? (
                <>
                    <div className='company-positions__title'>
                        <span>Позиции</span>
                        <Tag className={`lp-tag lp-tag_yellow`}>
                            план {positions.plan} | взяли {positions.taken}
                        </Tag>
                    </div>
                    <List
                        // loading={isPositionsLoading}
                        dataSource={positions.positions}
                        renderItem={(item) => (
                            <List.Item>
                                <div
                                    className='company-positions__item'
                                    onClick={() => {
                                        // navigate(`${item.id}`);
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
    );
};

export default CompanyPositions;
