import React, { useEffect } from 'react';

type T = HTMLDivElement | HTMLUListElement | null;

const useOutsideClick = (refs: React.MutableRefObject<T>[], clickOutside: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (
                !refs.some((ref) => {
                    return ref.current?.contains(event.target as HTMLElement);
                })
            ) {
                clickOutside();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [clickOutside, refs]);
};

export default useOutsideClick;
