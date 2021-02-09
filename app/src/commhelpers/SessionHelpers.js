const url = 'http://localhost:1000/users/'
export const preformLogout = async (username, cbSuccess) => {
    try {
        let res = await fetch(url + 'logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username })
        })
        if (res.status === 200) {
            cbSuccess()
        }
    } catch (error) {
        console.log(error)
    }
}

export const performLogin = async (e, cbSuccess, cbErr, payload) => {
    e.preventDefault();
    try {
        let res = await fetch(url + 'login', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ ...payload })
        })
        let data = await res.json()
        if (data.token) {
            cbSuccess(data.token)
        } else {
            cbErr(data)
        }
    } catch (error) {
        console.log(error)
        cbErr(error)
    }
}
export const validateToken = async (cbSuccess) => {
    try {
        let res = await fetch(url + 'validateToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            },
        })
        if (res.status === 200) {
            cbSuccess(localStorage.token)
        }
    } catch (error) {
        console.log(error)
    }
}