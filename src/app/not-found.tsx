'use client';

import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div>
            <h1>NotFoundPage</h1>
            <Link href="/">Return to main page</Link>
        </div>
    );
}

