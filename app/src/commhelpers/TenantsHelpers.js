const url = 'http://localhost:1000/tenants/'
export const getTenants = async (currentPage = 1, sort = 'showAll', cbSuccess = () => { }, cbErr = () => { }) => {
    try {
        let res = await fetch(url + `?page=${currentPage}&sort=${sort}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            }
        })
        let data = await res.json()
        if (res.status === 200) {
            if (data.tenants.length > 0) {
                cbSuccess(data)
            } else {
                cbErr()
            }
        }
    } catch (error) {
        console.log(error)
        cbErr()
    }

}
export const commonTenantCrud = async (method, body, cbSuccess, cbErr = () => { }) => {
    try {
        let res = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            },
            body: JSON.stringify(body)
        })
        let data = await res.json()
        if (res.status === 200) {
            cbSuccess(data)
        }
    } catch (error) {
        console.log(error)
    }

}
export const searchTenantByName = async (searchName, cbSuccess, cbErr) => {
    try {
        let res = await fetch(url + `namesearch/?name=${searchName}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            }
        })
        let data = await res.json()
        if (res.status === 200) {
            if (data.tenants.length > 0) {
                cbSuccess(data)
            } else {
                cbErr()
            }
        }
    } catch (error) {
        console.log(error)
        cbErr()
    }

}
export const getAddressesList = async (cbSuccess) => {
    try {
        let res = await fetch(url + 'addresses', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            }
        })
        let data = await res.json()
        if (res.status === 200) {
            cbSuccess(data)
        }
    } catch (error) {
        console.log(error)
    }
  
}