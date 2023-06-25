import { CompanyContactModel, CompanyRepresentativeModel } from 'api/Models';

export interface RepresentativeModalProps {
    isModalOpen: boolean;
    onCloseModal: () => void;
    representatives: CompanyRepresentativeModel[];
    onAddRepresentatives: (val: CompanyRepresentativeModel[]) => void;
}

export interface ContactFormProps {
    contact: CompanyContactModel;
    onChangeContact: (val: CompanyContactModel) => void;
}
