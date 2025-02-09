
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async() => {
  const session = await getServerSession(authOptions)
  console.log(session)

   
  return (
    <>
    if(session?.user){
      <div>
         <h1 className="text-4xl text-center mt-10">Welcome To Dashboard Page {
        session?.user?.name}
        
        </h1>
        <p>User Email {session?.user?.email}</p>
        <Image src={session?.user?.image as string} width={100} height={100} alt="user image" />
      </div>
    }
    else{
      <div>
        <h1 className="text-4xl text-center mt-10">Welcome To Dashboard  No user</h1>
      </div>
    }
     
    </>
  );
};

export default DashboardPage;
