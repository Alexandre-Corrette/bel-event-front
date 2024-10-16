
import { CompanyField, User } from "../lib/definitions"

export default function companyName({ companies, }: { companies: CompanyField[] | null }) {



  return (
    <div className="row w-full px-6 flex flex-row  ">
      <form>
        {/*Company name*/}
      </form>
      <select
        id="company"
        name="companyId"
        className="bg-[var(--background)] block w-1/4 text-center cursor-pointer  py-2 pl-10 text-xl text-[var(--paragraph)] outline-2 placeholder:text-[var(--paragraph)] placeholder:text-center"
        defaultValue="Sélectionner une entreprise"
      > <option className="text-xl text-center" value="Sélectionner votre entreprise" >
          VOTRE ENTREPRISE
        </option>

        {companies ? companies.map((company) => (

          <option key={company.id} value={company.id}>
            {company.name.toUpperCase()}
          </option>
        )) : <option className="text-xl text-center" value="Sélectionner votre entreprise" >
          VOTRE ENTREPRISE
        </option>
        }
      </select>

    </div>
  )
}