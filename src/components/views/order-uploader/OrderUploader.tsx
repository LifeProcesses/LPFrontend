import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import { Button } from 'antd';
import { useState, useRef, useCallback } from 'react';

import './OrderUploader.scss';

const OrderUploader: React.FC = () => {
    const [selectedDoc, setSelectedDoc] = useState<File>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const uploaderInputRef = useRef<HTMLInputElement>(null);

    const handleClickPublic = useCallback(() => {
        setIsLoading(true);
        setTimeout(async () => {
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <div className='order-uploader'>
            <input
                ref={uploaderInputRef}
                className='hidden'
                type='file'
                accept='.pdf,.doc,.docx'
                onChange={(el) => el.target.files?.length && setSelectedDoc(el.target.files[0])}
            />
            <div className='order-uploader__actions'>
                <Button className='lp-button_primary' onClick={() => uploaderInputRef?.current?.click()}>
                    Выбрать файл
                </Button>
                <Button type='primary' className='lp-button_primary' loading={isLoading} onClick={handleClickPublic}>
                    Опубликовать
                </Button>
            </div>
            {!selectedDoc && <p>Приказ не опубликован</p>}
            <DocViewer
                documents={
                    selectedDoc
                        ? [
                              {
                                  uri: window.URL.createObjectURL(selectedDoc),
                                  fileName: selectedDoc.name,
                              },
                          ]
                        : []
                }
                pluginRenderers={DocViewerRenderers}
            />
        </div>
    );
};

export default OrderUploader;
