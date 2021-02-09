global.fetch = require("node-fetch");
const names = ['Yossi', 'Amit', 'Assaf', 'Hadas', 'Alex', 'Linoy', 'Inbar', 'Moti', 'Elad', 'Noy']
const phoneNumbers = ['0508155889', '0552387752', '0565802979', '0514681293', '0504814704', '0568823847', '0509358102', '0529820485', '0542075446', '0579399503']

const createTenants = async (phoneNumber, name, address, debt) => {
    try {
        let res = await fetch('http://localhost:1000/tenants/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phoneNumber, name, address, debt })
        })
        let data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
for (let i = 0; i < 5; i++) {
    const number = Math.floor(Math.random() * 10)
    const name = names[number]
    const phoneNumber = phoneNumbers[number]
    const address = '60212c98f326502e7c8b49a8'
    const debt = number * 100
    createTenants(phoneNumber, name, address, debt)
}