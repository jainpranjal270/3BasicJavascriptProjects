let data = [
{
    name: 'user1', age: 30
}, 
{
    name: 'user2', age: 31
}, 
{
    name: 'user3', age: 33
}, 
{
    name: 'user4', age: 34
}, 
{
    name: 'user5', age: 35
}, 
{
    name: 'user6', age: 36
}
];

const info = document.querySelector("#info");

let details = data.map(function(item) {
    return(
        '<div>' + item.name + ' is ' + item.age + 'years old' + '</div>'
    )
})

info.innerHTML = details.join('\n');
