export async function getUserByAPI(payload) {
    const res = await fetch('http://localhost:8000/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })

    let data = await res.json();
    data.res = res.ok;
    if (res.ok) {
        data.success = true;
    }
    return data;
}

export async function addUserByAPI(payload) {
    const res = await fetch('http://localhost:8000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
    let data = await res.json();
    data.res = res.ok;
    return data;
}