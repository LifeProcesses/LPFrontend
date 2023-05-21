import { Contact } from 'components/views/company-details/CompanyDetails.interface';

export interface ContactCardProps {
    contact: Contact | null;
    isOpen: boolean;
    onClose: () => void;
}
