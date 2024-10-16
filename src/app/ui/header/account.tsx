import { UserCircleIcon, BellIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { User } from "../../lib/definitions";

export default function account({ user, }: { user: User | null }) {
    
    return (
        <div className="flex flex-row justify-center items-center w-full">
            <div className="flex flex-row justify-center items-center">

            <BellIcon className="size-6 justify-self-end text-yellow-300 "/>
            <Link href="/user/{id}/account" className="flex flex-row items-center mx-2"><UserCircleIcon className="size-6 mx-2"/>{user ? user.firstName + ' ' + user.lastName : null } </Link>
            </div>

        </div>
    );
}