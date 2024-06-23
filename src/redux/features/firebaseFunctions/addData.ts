import { db } from "@/db/db";
import { collection, addDoc } from "firebase/firestore";

type Props = {
    collectionName: string,
    data: any
}


export const addData = async ({collectionName, data}:Props) => {
    try {
        const docRef = await addDoc(collection(db,collectionName), {
            data    
        })
        console.log("data creada")
    }catch(e){
        console.log("error: ", e)
    }
}