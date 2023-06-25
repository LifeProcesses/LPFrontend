import { Avatar } from 'antd';
import { AvatarSize } from 'antd/es/avatar/SizeContext';

const AppAvatar: React.FC<{ src: string; size?: AvatarSize | number; style?: React.CSSProperties }> = ({
    src,
    size = 'default',
    style,
}) => (
    <Avatar
        size={size}
        style={{ backgroundColor: '#ccc', ...style }}
        src={<img onError={(e) => (e.currentTarget.style.display = 'none')} src={src} alt='avatar' />}
    />
);

export default AppAvatar;
