import { Header } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/logo.svg';

import './AppHeader.scss';

const AppHeader: React.FC = () => {
    return (
        <Header className='header'>
            <div className='header__logo'>
                <Logo />
                <span>Стажировки HITs</span>
            </div>
            <div className='header__navigation'>
                <Link to='students'>Студенты</Link>
                <Link to='companies'>Компании</Link>
                <Link to='positions'>Позиции</Link>
            </div>
            <div>2 курс</div>
        </Header>
    );
};

export default AppHeader;
