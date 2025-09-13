//state yok
//effect yok
//query yok
//js yok, chunk olarak var ama kendisi yok
//hakiki react

//server component, sunucu node.js'te çalışıyor


type User = {
    id:string;
    name:string;
}

const getUsers = async () : Promise<User[]> => {
    const API_URL = "https://jsonplaceholder.typicode.com/users"
    const res = await fetch(API_URL)
    const json = await res.json() as User[]
    return json
}

const page = async () => {
    const users = await getUsers()
  return (
    <ul>{users.map(({name}) => <li>{name}</li>)}</ul>
  )
}

export default page

