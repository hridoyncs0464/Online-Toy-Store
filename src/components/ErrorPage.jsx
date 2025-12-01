import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      <h1 className="text-4xl font-bold mb-2 text-red-500">Something went wrong</h1>
      <p className="mb-4 text-gray-700">
        An unexpected error occurred while loading this page.
      </p>
      {error && (
        <p className="text-sm text-gray-500 mb-4">
          {error.status} {error.statusText || error.message}
        </p>
      )}
      <Link to="/" className="btn btn-neutral">
        Go back to Home
      </Link>
    </div>
    );
};

export default ErrorPage;