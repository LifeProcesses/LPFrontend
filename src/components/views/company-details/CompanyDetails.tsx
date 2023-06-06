import { useCallback, useMemo, useState } from 'react';
// import { useParams } from 'react-router-dom';

import { Contact } from './CompanyDetails.interface';

import ContactCard from '../contact-card/ContactCard';

// import { useGetCompanyDetailsQuery } from 'api/routes/companiesApi';
import { CompanyContactPayload } from 'api/Models';
import { COMPANY_DETAIL_MOCK } from 'helpers/mocks/Companies.mock';

import './CompanyDetails.scss';

const convertToContact = (arr: CompanyContactPayload[]) => {
    return arr.reduce((acc: Contact[], item: CompanyContactPayload) => {
        const index = acc.findIndex((i) => i.name === item.name);
        if (index === -1) {
            acc.push({
                name: item.name,
                position: item.position,
                image: item.image,
                contacts: [{ id: item.id, contactType: item.contactType, value: item.value }],
            });
        } else {
            acc[index].contacts = [
                ...acc[index].contacts,
                { id: item.id, contactType: item.contactType, value: item.value },
            ];
        }
        return acc;
    }, []);
};

const CompanyDetails: React.FC = () => {
    // const { companyId } = useParams();
    // const {
    //     data: companyDetails,
    //     isLoading: isDetailsLoading,
    //     error: isDetailsError,
    // } = useGetCompanyDetailsQuery(parseInt(companyId || ''));
    const companyDetails = COMPANY_DETAIL_MOCK;

    const [isContactCardOpen, setIsContactCardOpen] = useState<boolean>(false);
    const [currentContact, setCurrentContact] = useState<Contact | null>(null);

    const contacts = useMemo(() => convertToContact(companyDetails.contacts), [companyDetails.contacts]);

    const representatives = useMemo(
        () => convertToContact(companyDetails.representatives),
        [companyDetails.representatives],
    );

    const handleClickContact = useCallback((contact: Contact) => {
        setCurrentContact(contact);
        setIsContactCardOpen(true);
    }, []);

    return (
        <>
            <div className='company-details'>
                {companyDetails ? (
                    <>
                        <div className='company-details__title'>
                            <h1 className='company-details__title_name'>{companyDetails.name}</h1>
                            <div className='company-details__title_logo'>{companyDetails.image}</div>
                        </div>
                        <div className='company-details__description'>{companyDetails.description}</div>
                        <div className='company-details__contact'>
                            <span className='company-details__contact_title'>Представитель:</span>
                            {representatives.map((repres) => (
                                <span
                                    className='company-details__contact_item'
                                    onClick={() => {
                                        handleClickContact(repres);
                                    }}
                                >
                                    {repres.name}
                                </span>
                            ))}
                        </div>
                        <div className='company-details__contact'>
                            <span className='company-details__contact_title'>Контакты:</span>
                            {contacts.map((contact) => (
                                <span
                                    className='company-details__contact_item'
                                    onClick={() => {
                                        handleClickContact(contact);
                                    }}
                                >
                                    {contact.name}
                                </span>
                            ))}
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
            <ContactCard
                contact={currentContact}
                isOpen={isContactCardOpen}
                onClose={() => setIsContactCardOpen(false)}
            />
        </>
    );
};

export default CompanyDetails;