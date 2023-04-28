import firebase_app from "@/firebase/config";
const db = getFirestore(firebase_app)

import {collection, getDocs, getFirestore} from "firebase/firestore";

const getAllDocs = async (collectionParam) => {
    const querySnapshot = await getDocs(collection(db,collectionParam));
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data());

    });
    // console.log(doc.id, " => ", doc.data());
    console.log(data);

}
export default getAllDocs;


