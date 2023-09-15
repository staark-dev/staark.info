// Import React Router Hooks
import { Link, Outlet } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer mt-auto">
            <div className="my-2 container">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                    <li class="nav-item"><Link to="/features" className="nav-link px-2 text-body-secondary">Features</Link></li>
                    <li class="nav-item"><Link to="/faq" className="nav-link px-2 text-body-secondary">FAQs</Link></li>
                    <li class="nav-item"><Link to="/privacy" className="nav-link px-2 text-body-secondary">Privacy</Link></li>
                    <li class="nav-item"><Link to="/terms" className="nav-link px-2 text-body-secondary">Terms & Conditions</Link></li>
                </ul>
                <p class="text-right">© 2023 Staark Development ❤️<br /> &copy; All right reserved.</p>
            </div>
            <Outlet />
        </footer>
    )
}