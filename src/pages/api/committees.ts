import { firebaseConfig } from "@/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function GET() {
  try {
    const committeesCollection = collection(db, "committees");
    const committeesSnapshot = await getDocs(committeesCollection);
    const committees = committeesSnapshot.docs.map((doc) => doc.data());

    return new Response(
        JSON.stringify(committees)
    );
  } catch (error: any) {
    return new Response(
        JSON.stringify({ error: error.message })
    );
  }
}