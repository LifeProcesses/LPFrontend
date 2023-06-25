import { Avatar, Button, Input } from 'antd';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CreateContact from './contact-form/ContactForm';
import RepresentativesModal from './representatives-modal/RepresentativesModal';

import { CompanyContactModel, CompanyRepresentativeModel } from 'api/Models';
import { useCreateCompanyMutation } from 'api/routes/companiesApi';
import { REPRESENTATIVES_MOCK } from 'helpers/mocks/Companies.mock';

import './CompanyForm.scss';

const { TextArea } = Input;

const CompanyForm: React.FC = () => {
    const navigate = useNavigate();

    const representatives: CompanyRepresentativeModel[] = REPRESENTATIVES_MOCK;

    const [createCompany, { isLoading }] = useCreateCompanyMutation();

    const [companyName, setCompanyName] = useState<string>('');
    const [companyImage, setCompanyImage] = useState<string>('');
    const [companyDescription, setCompanyDescription] = useState<string>('');
    const [selectedRepresentatives, setSelectedRepresentatives] = useState<CompanyRepresentativeModel[]>([]);
    const [contacts, setContacts] = useState<CompanyContactModel[]>([]);

    const [isRepresentsModalOpen, setIsRepresentsModalOpen] = useState<boolean>(false);

    const filteredRepresentatives = useMemo(
        () => representatives.filter((repres) => !selectedRepresentatives.some((r) => r.id === repres.id)),
        [representatives, selectedRepresentatives],
    );

    const handleChangeContact = useCallback(
        (index: number, contact: CompanyContactModel) => {
            const newContacts = [...contacts];
            newContacts[index] = contact;
            setContacts(newContacts);
        },
        [contacts],
    );

    const handleAddContact = useCallback(() => {
        const newContact: CompanyContactModel = {
            name: '',
            position: '',
            contactType: '',
            value: '',
        };

        setContacts((prev) => [...prev, newContact]);
    }, []);

    const handleRemoveContact = useCallback(
        (index: number) => {
            const newContacts = [...contacts];
            newContacts.splice(index, 1);
            setContacts(newContacts);
        },
        [contacts],
    );

    const handleRemoveRepresentative = useCallback((id: number) => {
        setSelectedRepresentatives((prev) => prev.filter((repres) => repres.id !== id));
    }, []);

    const handleCreateCompany = useCallback(async () => {
        await createCompany({
            name: companyName,
            description: companyDescription,
            image: '',
            representatives: selectedRepresentatives,
            contacts,
        })
            .unwrap()
            .then(() => navigate(-1));
    }, [companyDescription, companyName, contacts, createCompany, navigate, selectedRepresentatives]);

    const contactsList = useMemo(
        () => (
            <>
                {contacts.map((contact, i) => (
                    <div className='company-form__contacts_item'>
                        <CreateContact
                            key={i}
                            contact={contact}
                            onChangeContact={(val: CompanyContactModel) => handleChangeContact(i, val)}
                        />
                        <Button className='lp-button_primary' onClick={() => handleRemoveContact(i)}>
                            -
                        </Button>
                    </div>
                ))}
            </>
        ),
        [contacts, handleChangeContact, handleRemoveContact],
    );

    const representativesList = useMemo(
        () => (
            <>
                {selectedRepresentatives.map((repres, i) => (
                    <div className='company-form__representatives_item'>
                        <div>
                            <p>
                                {repres.name}, {repres.position}
                            </p>
                            <div>
                                {repres.contacts.map((contact) => (
                                    <p>
                                        {contact.contactType}: {contact.value}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <Button className='lp-button_primary' onClick={() => handleRemoveRepresentative(repres.id)}>
                            -
                        </Button>
                    </div>
                ))}
            </>
        ),
        [handleRemoveRepresentative, selectedRepresentatives],
    );

    return (
        <>
            <div className='company-form'>
                <div className='company-form__main'>
                    <Avatar src={companyImage && <img src={companyImage} alt='logo' />} size={80} />
                    <div>
                        <Input
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder='Название комапнии'
                        />
                        <Input onBlur={(e) => setCompanyImage(e.target.value)} placeholder='Логотип (ссылка)' />
                    </div>
                </div>
                <TextArea
                    value={companyDescription}
                    onChange={(e) => setCompanyDescription(e.target.value)}
                    rows={4}
                    placeholder='Описание комапнии'
                />
                <div>
                    <div className='company-form__representatives_title'>
                        <span>Представители</span>
                        <Button className='lp-button_primary' onClick={() => setIsRepresentsModalOpen(true)}>
                            +
                        </Button>
                    </div>
                    {representativesList}
                </div>
                <div className='company-form__contacts'>
                    <div className='company-form__contacts_title'>
                        <span>Контакты</span>
                        <Button className='lp-button_primary' onClick={handleAddContact}>
                            +
                        </Button>
                    </div>
                    {contactsList}
                </div>
                <Button type='primary' className='lp-button_primary' onClick={handleCreateCompany} loading={isLoading}>
                    Создать
                </Button>
            </div>
            <RepresentativesModal
                isModalOpen={isRepresentsModalOpen}
                onCloseModal={() => setIsRepresentsModalOpen(false)}
                representatives={filteredRepresentatives}
                onAddRepresentatives={(val) => setSelectedRepresentatives((prev) => [...prev, ...val])}
            />
        </>
    );
};

export default CompanyForm;
