import { Drawer } from 'antd';

import { StudentCardProps } from './StudentCard.interface';

import { StudentInfoPayload } from 'api/Models';

const StudentCard: React.FC<StudentCardProps> = ({ student, isOpen, onClose, isLoading }) => {
    return (
        <Drawer title='Basic Drawer' placement='right' size='large' onClose={onClose} open={isOpen}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    );
};

export default StudentCard;
