import { getDocs} from "firebase/firestore"

export const getData = async (q:any) => {
    const querySnapshot = await getDocs(q)
    let data:any = []
    querySnapshot.forEach((doc) => {
        data.push(doc.data())
    })
    return data
}