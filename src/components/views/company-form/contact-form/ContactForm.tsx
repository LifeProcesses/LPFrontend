import { Input } from 'antd';
import { useCallback } from 'react';

import { ContactFormProps } from '../CompanyForm.interface';

import './ContactForm.scss';

const ContactForm: React.FC<ContactFormProps> = ({ contact, onChangeContact }) => {
    const handleChangeContact = useCallback(
        (field: 'name' | 'position' | 'contactType' | 'value', value: string) => {
            onChangeContact({ ...contact, [field]: value });
        },
        [contact, onChangeContact],
    );

    return (
        <div className='contact-form'>
            <div>
                <Input
                    value={contact.name}
                    onChange={(e) => handleChangeContact('name', e.currentTarget.value)}
                    placeholder='Имя'
                />
                <Input
                    value={contact.position}
                    onChange={(e) => handleChangeContact('position', e.currentTarget.value)}
                    placeholder='Позиция'
                />
            </div>
            <div>
                <Input
                    value={contact.contactType}
                    onChange={(e) => handleChangeContact('contactType', e.currentTarget.value)}
                    placeholder='Контакт'
                />
                <Input
                    value={contact.value}
                    onChange={(e) => handleChangeContact('value', e.currentTarget.value)}
                    placeholder='Значение'
                />
            </div>
        </div>
    );
};

export default ContactForm;
