import { FilterInput } from "./data";

const Filters = () => (
    <div className="flex">
        {FilterInput.map((filter) => (
            <div className="flex items-center cursor-pointer hover:text-quaternary trans border rounded-lg border-dark w-fit px-2 py-1 hover:border-quaternary mr-4" key={filter.title}>
                {filter.icon}
                <p className="ml-1 text-sm">{filter.title}</p>
            </div>
        ))}
    </div>
);

export default Filters;