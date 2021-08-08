import { TextColor } from "../utils/colorEnum";

interface LoadingIndicatorProps {
    color?: TextColor
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ color='text-dark' }) => {
    return (
        <div className={`spinner-border ${color}`} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
}