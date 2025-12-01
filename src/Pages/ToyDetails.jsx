import React from "react";
import Navbar from "../components/Navbar";
import { useLoaderData, useParams } from "react-router";
import ToyViewMoreDetailes from "./ToyViewMoreDetailes";

const ToyDetails = () => {
  const data = useLoaderData();
  const { toyId } = useParams();

  const toy = data.find((t) => String(t.toyId) === String(toyId));

  if (!toy) {
    return (
      <div>
        <Navbar />
        <p className="text-center text-red-500 mt-10">Toy not found.</p>
      </div>
    );
  }

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="mt-6">
          <h2 className="font-bold text-3xl text-center text-green-500">Toy Details</h2>
          <ToyViewMoreDetailes toy={toy} />
        </section>
      </main>
    </div>
  );
};

export default ToyDetails;
