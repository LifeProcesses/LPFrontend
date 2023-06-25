import { Modal, Table } from 'antd';
import { useCallback, useState } from 'react';

import { RepresentativeModalProps } from '../CompanyForm.interface';

import { CompanyRepresentativeModel } from 'api/Models';

import type { ColumnsType } from 'antd/es/table';

import './RepresentativesModal.scss';

const RepresentativesModal: React.FC<RepresentativeModalProps> = ({
    isModalOpen,
    onCloseModal,
    representatives,
    onAddRepresentatives,
}) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [selectedRepresents, setSelectedRepresents] = useState<CompanyRepresentativeModel[]>([]);

    const columns: ColumnsType<CompanyRepresentativeModel> = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            render: (_, { name }) => <span>{name}</span>,
        },
        {
            title: 'Позиция',
            dataIndex: 'position',
            key: 'position',
            render: (_, { position }) => <span>{position}</span>,
        },
        {
            title: 'Контакты',
            dataIndex: 'contacts',
            key: 'contacts',
            render: (_, { contacts }) => (
                <div className='cell-wrapper'>
                    {contacts.map((contact) => (
                        <p>{`${contact.contactType}: ${contact.value}`}</p>
                    ))}
                </div>
            ),
        },
    ];

    const handleOk = useCallback(() => {
        onAddRepresentatives(selectedRepresents);
        setSelectedRowKeys([]);
        onCloseModal();
    }, [onAddRepresentatives, onCloseModal, selectedRepresents]);

    return (
        <Modal width={800} title='Представители' open={isModalOpen} onOk={handleOk} onCancel={onCloseModal}>
            <Table
                columns={columns}
                dataSource={representatives.map((repres) => ({ ...repres, key: repres.id }))}
                loading={!representatives}
                pagination={{ hideOnSinglePage: true }}
                rowSelection={{
                    selectedRowKeys,
                    onChange: (selectedRowKeys: React.Key[], selectedRows: CompanyRepresentativeModel[]) => {
                        setSelectedRepresents(selectedRows);
                        setSelectedRowKeys(selectedRowKeys);
                    },
                }}
            />
        </Modal>
    );
};

export default RepresentativesModal;
