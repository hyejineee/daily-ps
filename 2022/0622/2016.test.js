const solution = (a,b) => {
    const days = [31,29,31,30,31,30,31,31,30,31,30,31]
    const dayOfWeek = ['THU','FRI', 'SAT','SUN','MON','TUE','WED']
    
    const index = a > 1 
        ? parseInt((days.slice(0,a-1).reduce((acc,cur)=> acc+cur, 0) +b) % 7) 
        : parseInt(b%7)
    return dayOfWeek[index]
}

test(`2016`, () => {
    expect(solution(5,24)).toEqual("TUE")
})
