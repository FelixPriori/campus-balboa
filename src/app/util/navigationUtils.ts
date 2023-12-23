export const checkIsCurrent = (page: string, current: string) => {
    if (current === '/' && page === 'home') {
        return true;
    } else if (page === current.slice(1)) {
        return true;
    }
    return false;
}