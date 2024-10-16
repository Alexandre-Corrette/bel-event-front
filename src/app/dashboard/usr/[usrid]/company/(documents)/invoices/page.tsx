// `app/page.tsx` is the UI for the `/` URL
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Invoices '
  };

export default function Page() {
    return <h1>Hello, invoices!</h1>
  }