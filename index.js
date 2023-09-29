function superbowlWin(objArr) {
    const result = objArr.find(obj => {
        return obj.result === "W"
    })

    if (result)
        return result.year;
    return result;
}