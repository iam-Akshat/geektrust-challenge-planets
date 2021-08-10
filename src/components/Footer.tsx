import { Link } from "react-router-dom"

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = () => {
        return (
            <footer className="container-xl d-flex align-items-center justify-content-center" style={{minHeight:'50px',marginTop:'auto'}}>
                Coding problem at
                <span>&nbsp;</span>
                <Link to="https://www.geektrust.in/coding-problem/frontend/space"> here</Link>
            </footer>
        );
}