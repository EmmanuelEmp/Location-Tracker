import Image from "next/image"
export default function Loading() {
    return (

        <div className="loading-div">

            <Image
                src="/assets/loading.gif"
                width="200"
                height="200"
                alt="loading"

            />
        </div>

    )

}