export default function Post({id, title}:
{id: string, title: string}) {
    return (
        <>
            <div className="border rounded p-3 shadow">
                <h1 className="text-xl">{title}</h1>
                <div>Id: {id}</div>
            </div>
        </>
    );
}