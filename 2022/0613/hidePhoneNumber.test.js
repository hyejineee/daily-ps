const hidePhoneNumber = (phoneNumber)=>{
    return"*".repeat(phoneNumber.length -4) + phoneNumber.slice(-4)
}

test(`핸드폰 번호 가리기`, ()=>{
    expect(hidePhoneNumber("01033334444")).toEqual("*******4444")
})