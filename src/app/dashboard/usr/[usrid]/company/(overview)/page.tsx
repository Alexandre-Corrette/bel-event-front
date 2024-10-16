// `app/page.tsx` is the UI for the `/` URL
import CompanyName from '../../../../../ui/companyName';
import Header from '../../../../../ui/header/header';
import { fetchUserById, fetchUserCompanies } from '@/src/app/lib/data';
import { User } from '@/src/app/lib/definitions';




export default async function Page({params}:{params:{usrid:string}}) {
  let id = params.usrid;
  
  let res = await fetch(`http://localhost:8000/users/${id}`);
  
  let user = await res.json();
  
  var companies = null;
  if(user) {
   companies = user.companies;
  }
  
  return (<main>
    <div className="container mx-auto">
      <Header user={user} />
    </div>
   

    <div className="container my-6 mx-auto">
    <CompanyName companies={companies} />
    </div>
    <div className='container grid gird-2'>

    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


    </div>
  </main>)
}