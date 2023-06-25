import { Button, Input } from 'antd';
import { useCallback, useState } from 'react';

import { CompanyRepresentativeContactModel, CompanyRepresentativeModel } from 'api/Models';

import './RepresentativeForm.scss';

const RepresentativeForm: React.FC<{
    representative: CompanyRepresentativeModel;
    onChangeRepresentative: (val: CompanyRepresentativeModel) => void;
}> = ({ representative, onChangeRepresentative }) => {
    const [contacts, setContacts] = useState<CompanyRepresentativeContactModel[]>([
        {
            contactType: '',
            value: '',
        },
    ]);

    const handleChangeRepresentative = useCallback(
        (field: 'name' | 'position', value: string) => {
            onChangeRepresentative({ ...representative, [field]: value });
        },
        [onChangeRepresentative, representative],
    );

    const handleChangeContact = useCallback(
        (index: number, field: 'contactType' | 'value', value: string) => {
            const newContacts = [...contacts];
            newContacts[index] = { ...newContacts[index], [field]: value };
            setContacts(newContacts);
        },
        [contacts],
    );

    const handleAddContact = useCallback(() => {
        const newContact: CompanyRepresentativeContactModel = {
            contactType: '',
            value: '',
        };

        setContacts((prev) => [...prev, newContact]);
    }, []);

    return (
        <div className='representative-form'>
            <div>
                <Input
                    value={representative.name}
                    onChange={(e) => handleChangeRepresentative('name', e.currentTarget.value)}
                    placeholder='Имя'
                />
                <Input
                    value={representative.position}
                    onChange={(e) => handleChangeRepresentative('position', e.currentTarget.value)}
                    placeholder='Позиция'
                />
            </div>
            <div>
                {contacts.map((contact, i) => (
                    <>
                        <Input
                            value={contact.contactType}
                            onChange={(e) => handleChangeContact(i, 'contactType', e.currentTarget.value)}
                            placeholder='Контакт'
                        />
                        <Input
                            value={contact.value}
                            onChange={(e) => handleChangeContact(i, 'value', e.currentTarget.value)}
                            placeholder='Значение'
                        />
                    </>
                ))}
                <Button className='lp-button_primary' onClick={handleAddContact}>
                    +
                </Button>
            </div>
        </div>
    );
};

export default RepresentativeForm;
