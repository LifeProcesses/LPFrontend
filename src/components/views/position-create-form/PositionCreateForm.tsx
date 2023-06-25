import { Button, Input } from 'antd';
import { useCallback, useRef, useState } from 'react';

import { useCreatePositionMutation } from 'api/routes/positionsApi';
import useOutsideClick from 'hooks/useOutsideClick';

import './PositionCreateForm.scss';

const PositionCreateForm: React.FC = () => {
    const [createPosition, { isLoading }] = useCreatePositionMutation();

    const formRef = useRef<HTMLDivElement>(null);

    const [isNewPositionVisible, setIsNewPositionVisible] = useState<boolean>(false);
    const [newPosition, setNewPosition] = useState<string>('');

    const handleCancelClick = useCallback(() => {
        setIsNewPositionVisible(false);
        setNewPosition('');
    }, []);

    const handleCreatePosition = useCallback(async () => {
        if (!newPosition) {
            return;
        }
        await createPosition({
            name: newPosition,
        })
            .unwrap()
            .then(() => setIsNewPositionVisible(false));
    }, [createPosition, newPosition]);

    useOutsideClick([formRef], handleCancelClick);

    return (
        <div className='create-position'>
            <Button
                type='primary'
                className='lp-button_primary'
                onClick={() => setIsNewPositionVisible((prev) => !prev)}
            >
                Создать позицию
            </Button>
            {isNewPositionVisible && (
                <div className='create-position__form' ref={formRef}>
                    <div className='create-position__form_options'>
                        <Input
                            value={newPosition}
                            onChange={(e) => setNewPosition(e.currentTarget.value)}
                            placeholder='Позиция'
                        />
                    </div>
                    <div className='create-position__form_actions'>
                        <Button type='text' onClick={handleCancelClick}>
                            Отменить
                        </Button>
                        <Button
                            type='primary'
                            className='lp-button_primary'
                            onClick={handleCreatePosition}
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

export default PositionCreateForm;
