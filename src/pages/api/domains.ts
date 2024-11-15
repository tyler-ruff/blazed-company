import { firebaseConfig } from "@/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function GET() {
  try {
    const domainsCollection = collection(db, "domains");
    const domainsSnapshot = await getDocs(domainsCollection);
    const domains = domainsSnapshot.docs.map((doc) => doc.data());

    return new Response(
        JSON.stringify(domains)
    );
  } catch (error: any) {
    return new Response(
        JSON.stringify({ error: error.message })
    );
  }
}