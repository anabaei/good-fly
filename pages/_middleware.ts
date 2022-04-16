import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'


export function middleware(req: NextRequest, ev: NextFetchEvent) {
  //check auth
  const auth = req.headers.get('authorization')
  

 // Beware loops when redirecting to the same directory
 //return NextResponse.redirect('/2022')

  console.log("hi", auth)
  return NextResponse.next()
}

