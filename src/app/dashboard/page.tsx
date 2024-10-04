// `app/page.tsx` is the UI for the `/` URL
import { afacad } from '@/src/app/ui/fonts'

export default function Page() {
    return (<main>
        <h1 className={`${afacad.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
       
          
        </div>
      </main>)
  }