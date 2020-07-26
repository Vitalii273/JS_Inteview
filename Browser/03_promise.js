console.log('Request data...')
//
// setTimeout(() => {
//     console.log('Preparing data...')
//
//     const backendData = {
//         server: 'aws',
//         port: 3000,
//         status: 'working'
//     }
//
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000)

//============= PROMISE ===================

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: 3000,
            status: 'working'
        }
        resolve(backendData) //promise ended
    }, 2000)
})

// p.then((data) => {
//     console.log('Promise resolved', data)
// })

p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
})
    .then(clientData => {
        console.log('Data received', clientData)
        clientData.fromPromise = true
        return clientData
    })
    .then(data => {
        console.log('Modified', data)
    })
    .catch(err => console.error('Error: ', err))
    .finally(() => console.log('Finally'))

// ================= Sleep ========================
const sleep = ms => new Promise((resolve => setTimeout(() => resolve(), ms)))

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

// ================ Promise.all =========================
Promise.all([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('All promises')
    })

// ================ Promise.race =========================

Promise.race([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('Race promises')
    })


