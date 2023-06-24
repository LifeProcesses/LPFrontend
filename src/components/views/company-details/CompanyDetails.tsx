import { Avatar } from 'antd';
import { useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Contact } from './CompanyDetails.interface';

import ContactCard from '../contact-card/ContactCard';

import { CompanyContactPayload, CompanyRepresentativePayload } from 'api/Models';
import { useGetCompanyDetailsQuery } from 'api/routes/companiesApi';
import { COMPANY_DETAIL_MOCK } from 'helpers/mocks/Companies.mock';

import './CompanyDetails.scss';

const convertRepresentativesToContact = (arr: CompanyRepresentativePayload[]) => {
    return arr.map((repres) => ({
        name: repres.name,
        position: repres.position,
        image: repres.image,
        contacts: repres.contactsShortDto,
    }));
};

const convertToContact = (arr: CompanyContactPayload[]) => {
    return arr.reduce((acc: Contact[], item: CompanyContactPayload) => {
        const index = acc.findIndex((i) => i.name === item.name);
        if (index === -1) {
            acc.push({
                name: item.name,
                position: item.position,
                image: item.image,
                contacts: [{ contactType: item.contactType, value: item.value }],
            });
        } else {
            acc[index].contacts = [...acc[index].contacts, { contactType: item.contactType, value: item.value }];
        }
        return acc;
    }, []);
};

const CompanyDetails: React.FC = () => {
    const { companyId } = useParams();
    // const {
    //     data: companyDetails,
    //     // isLoading: isDetailsLoading,
    //     // error: isDetailsError,
    // } = useGetCompanyDetailsQuery(parseInt(companyId || ''));
    const companyDetails = COMPANY_DETAIL_MOCK;

    const [isContactCardOpen, setIsContactCardOpen] = useState<boolean>(false);
    const [currentContact, setCurrentContact] = useState<Contact | null>(null);

    const contacts = useMemo(
        () => convertToContact(companyDetails?.contactsFullDto || []),
        [companyDetails?.contactsFullDto],
    );

    const representatives = useMemo(
        () => convertRepresentativesToContact(companyDetails?.representativesDto || []),
        [companyDetails?.representativesDto],
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
                            <Avatar
                                src={companyDetails.image && <img src={companyDetails.image} alt='logo' />}
                                size={80}
                            />
                            <h1 className='company-details__title_name'>{companyDetails.name}</h1>
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
