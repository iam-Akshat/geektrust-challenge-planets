interface HeaderProps {
    heading: string
    classes?: string
}

export const Header: React.FC<HeaderProps> = ({ heading, classes }) => {
    return (
        <div className={`d-flex align-items-center justify-content-around ${classes}`}>
            <div></div>
            <h1>
                {heading}
            </h1>
            <div>
                <a href="https://geektrust.in"> Geek trust home</a>
            </div>
        </div>
    );
}