import { firebaseConfig } from "@/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function GET() {
  try {
    const telephonesCollection = collection(db, "telephones");
    const telephonesSnapshot = await getDocs(telephonesCollection);
    const telephones = telephonesSnapshot.docs.map((doc) => doc.data());

    return new Response(
        JSON.stringify(telephones)
    );
  } catch (error: any) {
    return new Response(
        JSON.stringify({ error: error.message })
    );
  }
}