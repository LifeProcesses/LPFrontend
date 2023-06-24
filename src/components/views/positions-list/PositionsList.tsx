import { Input, List } from 'antd';
import { useMemo, useState } from 'react';

import PositionItem from './position-item/PositionItem';

import { useGetPositionsListQuery } from 'api/routes/positionsApi';
// import { POSITIONS_MOCK } from 'helpers/mocks/Positions.mock';

import './PositionsList.scss';

const PositionsList: React.FC = () => {
    const { data: positionsList, isLoading: isPositionsLoading } = useGetPositionsListQuery();
    // const positionsList = POSITIONS_MOCK;

    const [filterValue, setFilterValue] = useState<string>('');

    const filteredPositions = useMemo(() => {
        return positionsList?.positions.filter((position) =>
            position.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()),
        );
    }, [filterValue, positionsList?.positions]);

    return (
        <div className='positions-list'>
            <Input
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                placeholder='Поиск'
                className='positions-list__search'
            />
            <div className='positions-list__info'>
                <span>Найдено позиций: {filteredPositions?.length || 0}</span>
                <span>
                    план {positionsList?.plan} | взяли {positionsList?.taken}
                </span>
            </div>
            <List
                dataSource={filteredPositions}
                loading={isPositionsLoading}
                renderItem={(item) => (
                    <List.Item>
                        <PositionItem position={item} />
                    </List.Item>
                )}
            ></List>
        </div>
    );
};

export default PositionsList;
