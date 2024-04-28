"use client";
import { DestinationCardProps } from "@/utils";
import Link from "next/link";
import "./destinationCard.css";

const DestinationCard = (props: DestinationCardProps) => {
  return (
    <Link href={`/destinos/detalle-destino?id=${props.country}`} className="box-image bg-gray-100">
      <div
        className="image w-full"
        style={{ backgroundImage: `url(${props.url})` }}
      ></div>
      <div className="texto w-full flex flex-col items-center">
        <h2>{props.country}</h2>
        <h1>{props.city}</h1>
        <h3>Descubre por ti mismo</h3>
      </div>
    </Link>
  );
};

export default DestinationCard;
