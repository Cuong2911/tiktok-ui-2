import { useEffect } from 'react';

const onClickOutside = (ref: any, onHandle: () => void) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const handleClickOutside = (e: any) => {
            const iOutSide = ref.current && !ref.current.contains(e.target);
            if (iOutSide) {
                onHandle();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};

export { onClickOutside };
