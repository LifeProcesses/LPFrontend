import { Avatar } from 'antd';
import { AvatarSize } from 'antd/es/avatar/SizeContext';
import { useEffect, useState } from 'react';

const AppAvatar: React.FC<{ src: string; alt?: string; size?: AvatarSize | number; style?: React.CSSProperties }> = ({
    src = 'https://www.meme-arsenal.com/memes/ec12b2d95f12a919311035ddfd7c03e2.jpg',
    alt = 'avatar',
    size = 'default',
    style,
}) => {
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        setHasError(false);
    }, [src]);

    return (
        <Avatar
            src={
                <img
                    onError={(e) => setHasError(true)}
                    src={src}
                    alt=''
                    style={{ display: hasError ? 'none' : 'block' }}
                />
            }
            size={size}
            style={{ backgroundColor: '#ccc', ...style }}
            alt={alt}
        />
    );
};

export default AppAvatar;
