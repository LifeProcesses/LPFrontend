import { Button, Select } from 'antd';
import { useCallback, useMemo, useState } from 'react';

import { STUDENT_STATUS_LABEL } from 'helpers/constants';
import { useAppSelector } from 'hooks/useAppSelector';

import './CreateInterviewForm.scss';

const CreateInterviewForm: React.FC = () => {
    const { companies, positions } = useAppSelector((store) => store.students);

    const [isNewInterviewVisible, setIsNewInterviewVisible] = useState<boolean>(false);
    const [newInterviewCompany, setNewInterviewCompany] = useState<number | null>(null);
    const [newInterviewPosition, setNewInterviewPosition] = useState<number | null>(null);
    const [newInterviewStatus, setNewInterviewStatus] = useState<string | null>(null);

    const companiesOptions = useMemo(
        () =>
            companies.map((company) => ({
                value: company.companyId,
                label: company.name,
            })),
        [companies],
    );

    const positionsOptions = useMemo(
        () =>
            positions.map((position) => ({
                value: position.id,
                label: position.name,
            })),
        [positions],
    );

    const statusesOptions = useMemo(
        () =>
            Object.entries(STUDENT_STATUS_LABEL).map((status) => ({
                value: status[0],
                label: status[1],
            })),
        [],
    );

    const handleCancelClick = useCallback(() => {
        setIsNewInterviewVisible(false);
        setNewInterviewCompany(null);
        setNewInterviewPosition(null);
        setNewInterviewStatus(null);
    }, []);

    const handleCreateInterview = useCallback(() => {
        if (!(newInterviewCompany && newInterviewPosition && newInterviewStatus)) {
            return;
        }
        console.log(newInterviewCompany, newInterviewPosition, newInterviewStatus);
    }, [newInterviewCompany, newInterviewPosition, newInterviewStatus]);

    return (
        <div className='create-interview'>
            <Button
                type='primary'
                className='lp-button_primary'
                onClick={() => setIsNewInterviewVisible((prev) => !prev)}
            >
                Добавить собеседование
            </Button>
            {isNewInterviewVisible && (
                <div className='create-interview__form'>
                    <div className='create-interview__form_options'>
                        <div>
                            <label>Компания</label>
                            <Select
                                placeholder='Выбрать'
                                onChange={(val) => {
                                    setNewInterviewCompany(val);
                                }}
                                options={companiesOptions}
                                optionFilterProp='label'
                            />
                        </div>
                        <div>
                            <label>Позиция</label>
                            <Select
                                placeholder='Выбрать'
                                onChange={(val) => {
                                    setNewInterviewPosition(val);
                                }}
                                options={positionsOptions}
                                optionFilterProp='label'
                            />
                        </div>
                        <div>
                            <label>Статус</label>
                            <Select
                                placeholder='Выбрать'
                                onChange={(val) => {
                                    setNewInterviewStatus(val);
                                }}
                                options={statusesOptions}
                                optionFilterProp='label'
                            />
                        </div>
                    </div>
                    <div className='create-interview__form_actions'>
                        <Button type='text' onClick={handleCancelClick}>
                            Отменить
                        </Button>
                        <Button type='primary' className='lp-button_primary' onClick={handleCreateInterview}>
                            Добавить
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateInterviewForm;
