import { useState } from "react";

export const useSearchValue = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearch = (value: string) => {
        setSearchValue(value)
    }

    // console.log(searchValue);

    return { handleSearch, searchValue };
};