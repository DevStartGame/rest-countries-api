export const Icon = ({ className = '', icon = 'search' }) => {
    return (
        <svg className={`icon ${className}`}>
            <use xlinkHref={`/imgs/icons.svg#${icon}`}></use>
        </svg>
    );
};
