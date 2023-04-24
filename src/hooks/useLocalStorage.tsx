const useLocalStorage = () => {
    const setLocalStorage = (key: string, value: string|number|any) => JSON.stringify(localStorage.setItem(key, value));
    const getLocalStorage = (key: string) => localStorage.getItem(key) && JSON.parse(localStorage.getItem(key) || '');
    const clearStorage = () => localStorage.clear();
    const removeItem = (key: string) => localStorage.removeItem(key);

    return { setLocalStorage, getLocalStorage, clearStorage, removeItem };
};


export default useLocalStorage;