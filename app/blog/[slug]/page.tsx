//state yok
//effect yok
//query yok
//js yok, chunk olarak var ama kendisi yok
//hakiki react

//server component, sunucu node.js'te çalışıyor


// type User = {
//     id:string;
//     name:string;
// }

// const getUsers = async () : Promise<User[]> => {
//     const API_URL = "https://jsonplaceholder.typicode.com/users"
//     const res = await fetch(API_URL)
//     const json = await res.json() as User[]
//     return json
// }

// const page = async () => {
//     const users = await getUsers()
//   return (
//     <ul>{users.map(({name}) => <li>{name}</li>)}</ul>
//   )
// }

// export default page



/*******************************/

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
};


const getUser = async (id: string) : Promise<User> => {
    const API_URL = "https://jsonplaceholder.typicode.com/users/" + id;
    const res = await fetch(API_URL)
    const json = await res.json() as User
    return json
}

const page = async () => {
    const {
      id,
      name,
      username,
      email, 
      address: {city},
      phone,
      website, 
      company:{name:companyName}
    } = await getUser("1")
    

  return (
    <ul>
      <li>ID: {id}</li>
      <li>Name: {name}</li>
      <li>Username: {username}</li>
      <li>Email: {email}</li>
      <li>City: {city}</li>
      <li>Phone: {phone}</li>
      <li>Website: {website}</li>
      <li>Company Name: {companyName}</li>
    </ul>
  )
}

export default page