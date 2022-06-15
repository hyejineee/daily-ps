const solution = (n) => {
    const primes = new Array(n + 1).fill(true)
    primes[0] = false
    primes[1] = false
    primes[2] = true

    for (let i = 2; i <= n; i++) {
        if (primes[i] == false) continue
        for (let j = 2 * i; j <= n; j += i) primes[j] = false
    }

    return primes.filter((v) => v).length
}

test(`소수찾기`, () => {
    expect(solution(10)).toEqual(4)
    expect(solution(5)).toEqual(3)
})