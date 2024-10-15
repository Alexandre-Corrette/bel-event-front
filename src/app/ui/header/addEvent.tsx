import { PlusCircleIcon } from '@heroicons/react/24/solid'

export default function addEvent() {
    return(
        <a href="/dashboard/event/new" className="flex flex-row items-center"><PlusCircleIcon className="size-6 mx-2"/> NOUVEL EVENEMENT</a>
    )
}