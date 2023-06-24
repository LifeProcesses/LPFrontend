import { Button, Input } from 'antd';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CreateContact from './contact-form/ContactForm';

import { CompanyContactModel } from 'api/Models';
import { useCreateCompanyMutation } from 'api/routes/companiesApi';

import './CompanyForm.scss';

const { TextArea } = Input;

const CompanyForm: React.FC = () => {
    const navigate = useNavigate();

    const [createCompany, { isLoading }] = useCreateCompanyMutation();

    const [companyName, setCompanyName] = useState<string>('');
    const [companyImage, setCompanyImage] = useState<string>('');
    const [companyDescription, setCompanyDescription] = useState<string>('');
    const [contacts, setContacts] = useState<CompanyContactModel[]>([]);

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

    const handleCreateCompany = useCallback(async () => {
        await createCompany({
            name: companyName,
            description: companyDescription,
            image: '',
            representatives: [],
            contacts,
        })
            .unwrap()
            .then(() => navigate(-1));
    }, [companyDescription, companyName, contacts, createCompany, navigate]);

    const contactsList = useMemo(
        () => (
            <>
                {contacts.map((contact, i) => (
                    <div className='company-form__contacts--item'>
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

    return (
        <div className='company-form'>
            <Input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder='Название комапнии'
            />
            <Input
                value={companyImage}
                onChange={(e) => setCompanyImage(e.target.value)}
                placeholder='Логотип (ссылка)'
            />
            <TextArea
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
                rows={4}
                placeholder='Описание комапнии'
            />
            <div>
                <p>Представители</p>
            </div>
            <div className='company-form__contacts'>
                <div className='company-form__contacts--title'>
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
    );
};

export default CompanyForm;
