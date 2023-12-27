export function sendEmail(data: FormData) {
    const apiEndpoint = '/api/contact';
    const email = data.get('email')
    const fullName = data.get('fullName')
    const message = data.get('message')
    const body = JSON.stringify({
        email,
        fullName,
        message
    })


    fetch(apiEndpoint, {
        method: 'POST',
        body
    })
        .then((res) => res.json())
        .catch((err) => {
            throw new Error(err);
        });
}