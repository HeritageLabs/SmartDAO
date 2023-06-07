import { FilterInput } from "./data";

interface IFilters {
    setActive: (arg0: boolean) => void;
    setExecuted: (arg0: boolean) => void;
}

const Filters = ({ setActive, setExecuted }: IFilters) => {

    const filters = [
        { name: "active", setFunction: () => { setActive(true) } },
        { name: "ended", setFunction: () => { setActive(false) } },
        { name: "executed", setFunction: () => { setExecuted(false) } }
    ]

    return (
        <div className="flex">
            {FilterInput.map((filter, index) => (
                <div onClick={filters[index].setFunction} className="flex items-center cursor-pointer hover:text-quaternary trans border rounded-lg border-dark w-fit px-2 py-1 hover:border-quaternary mr-4" key={filter.title}>
                    {filter.icon}
                    <p className="ml-1 text-sm">{filter.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Filters;