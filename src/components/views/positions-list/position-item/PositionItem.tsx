import { Tag } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PositionPayload } from 'api/Models';

import './PositionItem.scss';

const PositionItem: React.FC<{ position: PositionPayload }> = ({ position }) => {
    const navigate = useNavigate();

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <div className='position'>
            <div className='position__item' onClick={() => setIsExpanded(!isExpanded)}>
                <span className='position__item-name'>{position.name}</span>
                <Tag className={`lp-tag lp-tag_yellow`}>
                    план {position.plan} | взяли {position.taken}
                </Tag>
            </div>
            {isExpanded && (
                <div className='position__companies'>
                    {position.companies?.map((company, i) => (
                        <div
                            onClick={() => {
                                navigate(`/companies/${company.companyId}`);
                            }}
                            className='position__companies-item'
                            key={i}
                        >
                            <span>{company.name}</span>
                            <span>
                                план {company.plan} | взяли {company.taken}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PositionItem;
