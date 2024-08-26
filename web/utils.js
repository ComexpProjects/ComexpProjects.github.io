function deleteArchive(url, id) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({'archive_id':id}),
        headers: {
            'archives-token': JSON.parse(localStorage.getItem('comexp-token')),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
}