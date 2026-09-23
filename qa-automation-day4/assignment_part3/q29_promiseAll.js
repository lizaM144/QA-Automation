// Q29
// Task: You have three fetchUser calls. 
// Write loadAll() that runs them at the same time and returns an array of all three results. 
// Measure that it takes ~500ms total, not 1500ms
function fetchUser(id){
    return new Promise(resolve => {
        setTimeout(() => resolve({
                id,
                name: 'User' + id
            }), 500);
    })
}

async function loadAll(){
    const users = await Promise.all([fetchUser(1),fetchUser(2),fetchUser(3)]);
    console.log(users);
}

loadAll();