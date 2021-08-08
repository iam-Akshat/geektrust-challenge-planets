interface HeaderProps {
    heading: string
    classes?: string
}

export const Header: React.FC<HeaderProps> = ({ heading, classes }) => {
    return (
        <div className={`d-flex align-items-center justify-content-center ${classes}`}>
            <h1>
                {heading}
            </h1>
        </div>
    );
}