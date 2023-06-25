import { Avatar } from 'antd';
import { AvatarSize } from 'antd/es/avatar/SizeContext';

const AppAvatar: React.FC<{ src: string; alt?: string; size?: AvatarSize | number; style?: React.CSSProperties }> = ({
    src = 'https://www.meme-arsenal.com/memes/ec12b2d95f12a919311035ddfd7c03e2.jpg',
    alt = 'avatar',
    size = 'default',
    style,
}) => (
    <Avatar
        src={<img onError={(e) => (e.currentTarget.style.display = 'none')} src={src} alt='' />}
        size={size}
        style={{ backgroundColor: '#ccc', ...style }}
        alt={alt}
    />
);

export default AppAvatar;
