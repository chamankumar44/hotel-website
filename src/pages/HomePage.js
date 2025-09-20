import {useLocation} from 'react-router-dom';

export default function HomePage() {
    const location = useLocation();
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Welcome to the Hotel Management System</h1>
        <p>This is the home page. Use the navigation links to explore the app.</p>
        {location.state && location.state.margin && (
            <p>Navigation state margin: {location.state.margin}</p>
        )}
        </div>
    );
}