export function Moon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none">
            <path
                d="M12 3.5C10.8065 4.69347 10.136 6.31217 10.136 8C10.136 9.68783 10.8065 11.3065 12 12.5C13.1935 13.6935 14.8122 14.364 16.5 14.364C18.1878 14.364 19.8065 13.6935 21 12.5C21 14.28 20.4722 16.0201 19.4832 17.5001C18.4943 18.9802 17.0887 20.1337 15.4442 20.8149C13.7996 21.4961 11.99 21.6743 10.2442 21.3271C8.49836 20.9798 6.89472 20.1226 5.63604 18.864C4.37737 17.6053 3.5202 16.0016 3.17294 14.2558C2.82567 12.51 3.0039 10.7004 3.68509 9.05585C4.36628 7.41131 5.51983 6.00571 6.99987 5.01677C8.47991 4.02784 10.22 3.5 12 3.5Z"
                stroke="var(--text-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function FillMoon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none">
            <path
                d="M12 3.5C10.8065 4.69347 10.136 6.31217 10.136 8C10.136 9.68783 10.8065 11.3065 12 12.5C13.1935 13.6935 14.8122 14.364 16.5 14.364C18.1878 14.364 19.8065 13.6935 21 12.5C21 14.28 20.4722 16.0201 19.4832 17.5001C18.4943 18.9802 17.0887 20.1337 15.4442 20.8149C13.7996 21.4961 11.99 21.6743 10.2442 21.3271C8.49836 20.9798 6.89472 20.1226 5.63604 18.864C4.37737 17.6053 3.5202 16.0016 3.17294 14.2558C2.82567 12.51 3.0039 10.7004 3.68509 9.05585C4.36628 7.41131 5.51983 6.00571 6.99987 5.01677C8.47991 4.02784 10.22 3.5 12 3.5Z"
                fill="var(--text-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function ArrowLeft() {
    return (
        <svg
            className="move-left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6 8L2 12L6 16"
                stroke="#111517"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2 12H22"
                stroke="#111517"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
