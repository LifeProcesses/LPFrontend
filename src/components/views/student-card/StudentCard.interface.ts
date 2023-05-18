import { StudentInfoPayload } from 'api/Models';

export interface StudentCardProps {
    student: StudentInfoPayload | null;
    isOpen: boolean;
    onClose: () => void;
    isLoading: boolean;
}
