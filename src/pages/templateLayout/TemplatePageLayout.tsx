import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';

import AppHeader from './header/AppHeader';
import './TemplatePageLayout.scss';

const TemplatePageLayout: React.FC = () => {
    return (
        <Layout>
            <AppHeader />
            <Content>
                <Outlet />
            </Content>
        </Layout>
    );
};

export default TemplatePageLayout;
