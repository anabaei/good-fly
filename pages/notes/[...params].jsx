import React from 'react';
import { useRouter} from 'next/router';

const page = () => {
 const router = useRouter()
 const { params } = router.query

 return (
   <h1>
     Note {id}
   </h1>
 )
}
export default page;