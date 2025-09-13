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

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({params}:Props) => {
  const {slug} = await params
  const user = await getUser(slug)

  return (
    <ul>
      <li>{user.id}</li>
      <li>{user.name}</li>
      <li>{user.username}</li>
      <li>{user.email}</li>
      <li>{user.address.city}</li>
      <li>{user.phone}</li>
      <li>{user.website}</li>
      <li>{user.company.name}</li>
    </ul>
  )
}

export default page