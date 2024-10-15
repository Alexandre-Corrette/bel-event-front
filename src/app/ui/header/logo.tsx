import Image from "next/image"

export default function Logo() {
    return(
        <div >
            <Image
                className="dark:invert"
                src={'/logo/logo_bel_event_500_120.png'}
                alt="bel event logo"
                width={170  }
                height={43}
                priority
            />
        </div>
    )
}