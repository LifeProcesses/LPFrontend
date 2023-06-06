export interface Contact {
    name: string;
    position: string;
    image: string;
    contacts: {
        id: number;
        contactType: string;
        value: string;
    }[];
}
