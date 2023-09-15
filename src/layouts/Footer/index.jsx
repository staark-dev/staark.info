// Import React Router Hooks
import { Link, Outlet } from "react-router-dom";

export default function Footer() {
    return (
        <div class="container">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                    <li class="nav-item"><Link to="/features" className="nav-link px-2 text-body-secondary">Features</Link></li>
                    <li class="nav-item"><Link to="/faq" className="nav-link px-2 text-body-secondary">FAQs</Link></li>
                    <li class="nav-item"><Link to="/privacy" className="nav-link px-2 text-body-secondary">Privacy</Link></li>
                    <li class="nav-item"><Link to="/terms" className="nav-link px-2 text-body-secondary">Terms & Conditions</Link></li>
                </ul>
                <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
            </footer>
            <Outlet />
        </div>
    )
}