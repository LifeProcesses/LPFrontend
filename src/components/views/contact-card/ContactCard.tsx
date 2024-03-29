import { Avatar, Drawer } from 'antd';

import { ContactCardProps } from './ContactCard.interface';

import './ContactCard.scss';

const ContactCard: React.FC<ContactCardProps> = ({ contact, isOpen, onClose }) => {
    return (
        <Drawer
            placement='right'
            contentWrapperStyle={{ width: 'min(50%, 700px)' }}
            closable={false}
            onClose={onClose}
            open={isOpen}
            bodyStyle={{ padding: '55px 30px 0' }}
        >
            {!contact ? (
                <p>Smth went wrong</p>
            ) : (
                <div className='contact-card'>
                    <div className='contact-card__info'>
                        <Avatar
                            src={contact.image && <img src={contact.image} alt='avatar' />}
                            size={80}
                            style={{ marginRight: '17px' }}
                        />
                        <div>
                            <p className='contact-card__info_name'>{contact.name}</p>
                            <p>{contact.position}</p>
                        </div>
                    </div>
                    <div className='contact-card__contacts'>
                        <p>Контакты</p>
                        {contact.contacts.map((cont, i) => (
                            <p key={i}>{`${cont.contactType}: ${cont.value}`}</p>
                        ))}
                    </div>
                </div>
            )}
        </Drawer>
    );
};

export default ContactCard;
