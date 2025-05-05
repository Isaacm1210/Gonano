

export default function ItemCard({title, desc}) {
    return (
        <div className="min-h-52 bg-darker-purple w-1/4 text-center rounded-2xl p-10">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="text-lg mt-5">{desc}</p>
        </div>
    )
}