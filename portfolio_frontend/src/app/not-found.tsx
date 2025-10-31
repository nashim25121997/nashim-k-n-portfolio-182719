import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container section">
      <div className="card p-8 text-center">
        <div className="badge mb-4">404</div>
        <h1 className="text-2xl font-semibold mb-2">Page Not Found</h1>
        <p className="text-muted mb-6">
          The page you’re looking for doesn’t exist or might have been moved.
        </p>
        <Link href="/" className="btn btn-primary" aria-label="Back to home">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
