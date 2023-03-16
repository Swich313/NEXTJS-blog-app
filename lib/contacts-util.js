const sendContactData = async contactDetails => {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(contactDetails)
    });

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Something went wrong!');
    }
};

export default sendContactData;