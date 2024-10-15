import { UserCircleIcon, BellIcon } from "@heroicons/react/24/solid";

export default function account() {
    return (
        <div className="flex flex-row justify-center items-center w-full">
            <div className="flex flex-row justify-center items-center">

            <BellIcon className="size-6 justify-self-end text-yellow-300 "/>
            <a href="/user/{id}/account" className="flex flex-row items-center mx-2"><UserCircleIcon className="size-6 mx-2"/>Jean Truc</a>
            </div>

        </div>
    );
}