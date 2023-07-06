import { Button, InputNumber, Select } from 'antd';
import { useCallback, useMemo, useRef, useState } from 'react';

import { CompanyPositionPayload } from 'api/Models';
import { useAddCompanyPositionMutation } from 'api/routes/companiesApi';
import { useGetPositionsListQuery } from 'api/routes/positionsApi';

import useOutsideClick from 'hooks/useOutsideClick';

import './AddPositionForm.scss';

const AddPositionForm: React.FC<{ companyPositions?: CompanyPositionPayload[]; companyId: number }> = ({
    companyPositions,
    companyId,
}) => {
    const { data: positions } = useGetPositionsListQuery();
    const [addPosition, { isLoading }] = useAddCompanyPositionMutation();

    const formRef = useRef<HTMLDivElement>(null);

    const [isNewInterviewVisible, setIsNewInterviewVisible] = useState<boolean>(false);
    const [newPosition, setNewPosition] = useState<number | null>(null);
    const [newPositionPlan, setNewPositionPlan] = useState<number>(0);

    const positionsOptions = useMemo(
        () =>
            companyPositions && positions
                ? positions.positions
                      .filter((position) => !companyPositions.some((p) => p.positionId === position.positionId))
                      .map((position) => ({
                          value: position.positionId,
                          label: position.name,
                      }))
                : [],
        [companyPositions, positions],
    );

    const handleCancelClick = useCallback(() => {
        setIsNewInterviewVisible(false);
        setNewPosition(null);
        setNewPositionPlan(0);
    }, []);

    const handleAddPosition = useCallback(async () => {
        if (!newPosition) {
            return;
        }
        await addPosition({
            companyId: 1,
            position: {
                postionTypeId: newPosition.toString(),
                plan: newPositionPlan,
            },
        })
            .unwrap()
            .then(() => setIsNewInterviewVisible(false));
    }, [addPosition, newPosition, newPositionPlan]);

    useOutsideClick([formRef], handleCancelClick);

    return (
        <div className='add-position'>
            <Button
                type='primary'
                className='lp-button_primary'
                onClick={() => setIsNewInterviewVisible((prev) => !prev)}
            >
                Добавить позицию
            </Button>
            {isNewInterviewVisible && (
                <div className='add-position__form' ref={formRef}>
                    <div className='add-position__form_options'>
                        <div>
                            <label>Позиция</label>
                            <Select
                                placeholder='Выбрать'
                                onChange={(val) => {
                                    setNewPosition(val);
                                }}
                                options={positionsOptions}
                                optionFilterProp='label'
                            />
                        </div>
                        <div>
                            <label>План</label>
                            <InputNumber
                                min={0}
                                value={newPositionPlan}
                                onChange={(val) => setNewPositionPlan(val || 0)}
                            />
                        </div>
                    </div>
                    <div className='add-position__form_actions'>
                        <Button type='text' onClick={handleCancelClick}>
                            Отменить
                        </Button>
                        <Button
                            type='primary'
                            className='lp-button_primary'
                            onClick={handleAddPosition}
                            loading={isLoading}
                        >
                            Добавить
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddPositionForm;
