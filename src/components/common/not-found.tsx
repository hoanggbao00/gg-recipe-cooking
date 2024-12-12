export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl">Page not found</p>
      <p className="text-lg">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
    </div>
  );
}

