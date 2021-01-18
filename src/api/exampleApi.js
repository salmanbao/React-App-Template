const Working = async () => {
    return new Promise((resolve) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => resolve(json))
            .catch(err => resolve([]))
    })
}


export const ExampleService = {
    Working
}