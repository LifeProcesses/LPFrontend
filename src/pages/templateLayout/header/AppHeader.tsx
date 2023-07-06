import { Select } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useMemo } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/icons/logo.svg';

import { STUDENTS_FLOW_MOCK } from 'helpers/mocks/Flow.mock';

import './AppHeader.scss';

const AppHeader: React.FC = () => {
    const { pathname } = useLocation();
    const isStudentsPath = matchPath('/students/*', pathname);
    const isCompaniesPath = matchPath('/companies/*', pathname);
    const isPositionsPath = matchPath('/positions/*', pathname);
    const isOrderPath = matchPath('/order/*', pathname);

    const flowOPtions = useMemo(() => STUDENTS_FLOW_MOCK.map((flow) => ({ value: flow.id, label: flow.name })), []);

    const handleChangeFlow = (value: string) => {
        console.log(value);
    };

    return (
        <Header className='header'>
            <div className='header__logo'>
                <Logo />
                <span>Стажировки HITs</span>
            </div>
            <div className='header__navigation'>
                <Link to='students' className={isStudentsPath ? 'selected' : ''}>
                    Студенты
                </Link>
                <Link to='companies' className={isCompaniesPath ? 'selected' : ''}>
                    Компании
                </Link>
                <Link to='positions' className={isPositionsPath ? 'selected' : ''}>
                    Позиции
                </Link>
                <Link to='order' className={isOrderPath ? 'selected' : ''}>
                    Приказ
                </Link>
            </div>
            <div className='header__select'>
                <Select
                    defaultValue='97200P'
                    bordered={false}
                    style={{ width: 120 }}
                    onChange={handleChangeFlow}
                    options={flowOPtions}
                />
            </div>
        </Header>
    );
};

export default AppHeader;
