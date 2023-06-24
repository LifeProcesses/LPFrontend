export interface Contact {
    name: string;
    position: string;
    image: string;
    contacts: {
        contactType: string;
        value: string;
    }[];
}
