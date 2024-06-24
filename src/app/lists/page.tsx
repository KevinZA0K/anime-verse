"use client"
import { db } from '@/db/db'
import { getData } from '@/redux/features/firebaseFunctions/getData'
import { useAppSelector } from '@/redux/hooks'
import { collection, query, where } from 'firebase/firestore'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {

  const user = useAppSelector((state) => state.authReducer.user);
  const [list,setList] = useState<any>([])

  const getUserList = async (q:any) => {
    const data = await getData(q)
    return data
  }

  useEffect(()=>{

    if(user === null){
      return 
    }
    const q = query(collection(db,"user"), where("email",'==',user))
    getUserList(q).then(res => setList(res))

  },[user])

  if(!list[0]){
    return (
      <div>loading o error o no lista disponible</div>
    )
  }

  return (
    <div>
      {
        list[0].list.map((anime:any) => (
          <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.image}/>
            <h2>{anime.title}</h2>
          </Link>
        ))
      }
    </div>
  )
}

export default page