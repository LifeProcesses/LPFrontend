import { CompanyPositionPayload } from 'api/Models';

export interface PositionCardProps {
    isFirstPosition: boolean;
    position: CompanyPositionPayload | null;
    isOpen: boolean;
    onClose: () => void;
    onClickStudent: (id: number) => void;
}
