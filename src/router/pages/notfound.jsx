import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        {/* Large 404 Text */}
        <h1 className="display-1 fw-bold text-primary">404</h1>
        
        {/* Friendly Message */}
        <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
        <p className="lead">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        
        {/* Home Button */}
        <Link to="/" className="btn btn-primary px-5 py-2 mt-3 shadow-sm">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}