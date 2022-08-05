import './GlobalStyles.scss';

interface Props {
    children: JSX.Element;
}

const GlobalStyles = (props: Props) => {
    const { children } = props;
    return <>{children}</>;
};

export default GlobalStyles;
