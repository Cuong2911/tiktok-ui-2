import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Props {
    to?: string;
    href?: string;
    children?: JSX.Element | JSX.Element[] | string | string[];
    onClick?: () => void;
    primary?: boolean;
    primaryOutline?: boolean;
    btn1?: boolean;
    rounder?: boolean;
    small?: boolean;
    large?: boolean;
    dissable?: boolean;
}

function Button(props: Props) {
    const {
        to,
        href,
        children,
        primary = false,
        primaryOutline = false,
        btn1 = false,
        rounder = false,
        small,
        large = false,
        onClick,
        dissable = false,
        ...rest
    } = props;

    let Comp: any = 'button';
    const _prop: {
        to?: string;
        href?: string;
        onClick?: () => void;
    } = { onClick, ...rest };
    if (dissable) delete _prop.onClick;

    if (to) {
        Comp = Link;
        _prop.to = to;
    } else if (href) {
        _prop.href = href;
    }

    const classes = cx('wrapper', {
        primary,
        primaryOutline,
        btn1,
        rounder,
        small,
        large,
        dissable,
    });
    return (
        <Comp className={classes} {..._prop}>
            {children}
        </Comp>
    );
}

export default Button;
