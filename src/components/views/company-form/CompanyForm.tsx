import { Button, Input, InputNumber } from 'antd';
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
    const [companyDescription, setCompanyDescription] = useState<string>('');
    const [planCount, setPlanCount] = useState<number>(0);
    const [takenCount, setTakenCount] = useState<number>(0);
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
            plan: planCount,
            taken: takenCount,
            representatives: [],
            contacts,
        })
            .unwrap()
            .then(() => navigate(-1));
    }, [companyDescription, companyName, contacts, createCompany, navigate, planCount, takenCount]);

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
            <TextArea
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
                rows={4}
                placeholder='Описание комапнии'
            />
            <div className='company-form__positions'>
                <span>План</span>
                <InputNumber min={0} value={planCount} onChange={(val) => setPlanCount(val || 0)} />
                <span>Взяли</span>
                <InputNumber min={0} value={takenCount} onChange={(val) => setTakenCount(val || 0)} />
            </div>
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
