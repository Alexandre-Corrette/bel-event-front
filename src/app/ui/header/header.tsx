import Logo from "./logo";
import AddEvent from "./addEvent";
import Account from "./account";
import { User } from "../../lib/definitions";


export default function Header({user}:{user:User}) {
    return (
        <div className={'grid grid-cols-3 gap-4 '}>
            <Logo />
            <div className="flex justify-center items-center">
            <AddEvent/>
            </div>
            <div className="flex justify-center items-center">
               <Account user={user}/>
            </div>

        </div>


    )
}