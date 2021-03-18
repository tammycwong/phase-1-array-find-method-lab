function superbowlWin(record) {
    const yearWon = record.find(win => win.result==='W');
    if (yearWon) {
        return yearWon.year;
    }
}