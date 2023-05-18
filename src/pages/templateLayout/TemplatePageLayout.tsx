import { Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
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
            <Footer>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper tellus a facilisis
                ullamcorper. Vestibulum.
            </Footer>
        </Layout>
    );
};

export default TemplatePageLayout;
