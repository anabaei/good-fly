import React from "react";

import Link from "next/link";
import { useRouter } from 'next/router';

const page = () => {
  const router = useRouter()
  const val = '2'
  return (
    <div>
        <Link href="/notes/[id]" as={`/notes/${val}`}>
         notes 2
      </Link>
      <button onClick={e => router.push("/")}>
          Home index
      </button>
      <button onClick={e => router.push("/notes/[id]", `/notes/${val}`)}>
          Home index with dynamic routes
      </button>
    </div>
  );
};
export default page;
