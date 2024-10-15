import Logo from "./logo";
import AddEvent from "./addEvent";
import Account from "./account";


export default function Header() {
    return (
        <div className={'grid grid-cols-3 gap-4 pl-4'}>
            <Logo />
            <div className="flex justify-center items-center">
            <AddEvent/>
            </div>
            <div className="flex justify-center items-center">
               <Account/>
            </div>

        </div>


    )
}