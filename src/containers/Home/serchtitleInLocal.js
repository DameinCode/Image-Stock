export default function searchTitleInLocal(title) {
    const temp = JSON.parse(localStorage.getItem('searchTitle'))
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === title) {
            return true
        }
    }
    return false
}
