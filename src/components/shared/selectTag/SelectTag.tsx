import { Tag } from 'antd';

import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

export const tagRender = ({ label, value, closable, onClose }: CustomTagProps) => {
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
        onClose();
    };
    return (
        <Tag onMouseDown={onPreventMouseDown} onClose={onClose} className='lp-tag lp-tag_filter'>
            {label}
        </Tag>
    );
};

interface FilterTagComponentProps {
    label: string;
    onClose: () => void;
}

export const FilterTagComponent: React.FC<FilterTagComponentProps> = ({ label, onClose }) => {
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
        onClose();
    };
    return (
        <Tag onMouseDown={onPreventMouseDown} onClose={onClose} className='lp-tag lp-tag_filter'>
            {label}
        </Tag>
    );
};
