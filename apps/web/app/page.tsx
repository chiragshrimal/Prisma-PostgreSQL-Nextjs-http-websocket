
// in this file we are featching thing from the database 

import {client} from "@repo/db/client";

export default async  function Home() {
 const user = await client.user.findFirst();

  return (
    <div>
      {user?.username}
     pasrd;
      {user?.username}
    </div>
  );
}
