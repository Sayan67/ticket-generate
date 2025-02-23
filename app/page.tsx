"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [github, setGithub] = useState("");
  const [type, setType] = useState("standard");
  const [img, setImg] = useState("");
  const [socials, setSocials] = useState({
    twitter: "",
    facebook: "",
    linkedin: "",
    whatsapp: "",
    telegram: "",
  });

  function handleTicketGenerate() {
    const ticketUrl = `/api/ticket?name=${encodeURIComponent(
      name
    )}&github=${encodeURIComponent(github)}&type=${encodeURIComponent(type)}`;
    setImg(ticketUrl);
  }

  useEffect(() => {
    if (window) {
      const socialLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          process.env.NEXT_PUBLIC_URL + img
        )}&text=Check out my ticket!`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          process.env.NEXT_PUBLIC_URL + img
        )}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          process.env.NEXT_PUBLIC_URL + img
        )}`,
        whatsapp: `https://api.whatsapp.com/send?text=Check out my ticket! ${encodeURIComponent(
          process.env.NEXT_PUBLIC_URL + img
        )}`,
        telegram: `https://t.me/share/url?url=${encodeURIComponent(
          process.env.NEXT_PUBLIC_URL + img
        )}&text=Check out my ticket!`,
      };
      setSocials(socialLinks);
    }
  }, [img]);

  return (
    <>
      <head>
        <meta
          property="og:url"
          content="https://ticket-generate-kohl.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Apertre2.0" />
        <meta property="og:description" content="Apertre2.0 Ticket" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_URL}/api/ticket?name=${name}&github=${github}&type=${type}`}
        />
      </head>
      <body>
        <div
          style={{ textAlign: "center", padding: "20px" }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center gap-3">
            <h1>🎟 Ticket Generator</h1>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md bg-white/15"
            />
            <input
              type="text"
              placeholder="GitHub Username"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md bg-white/15"
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="text-black px-4 py-2 border border-gray-300 rounded-md "
            >
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="vip">VIP</option>
            </select>
            <button
              onClick={handleTicketGenerate}
              className="px-4 py-2 border border-gray-300 rounded-md bg-white/15"
            >
              Generate Ticket
            </button>
          </div>
          {img && (
            <Image
              src={img}
              alt="Generated Ticket"
              width={400}
              height={200}
              className="my-4 rounded-lg border"
            />
          )}

          <h2>Share your ticket:</h2>
          <div className="flex gap-2 items-center">
            <Link href={socials.twitter} target="_blank">
              🐦 Twitter
            </Link>{" "}
            |
            <Link href={socials.facebook} target="_blank">
              📘 Facebook
            </Link>{" "}
            |
            <Link href={socials.linkedin} target="_blank">
              💼 LinkedIn
            </Link>{" "}
            |
            <Link href={socials.whatsapp} target="_blank">
              📲 WhatsApp
            </Link>{" "}
            |
            <Link href={socials.telegram} target="_blank">
              📢 Telegram
            </Link>
          </div>
        </div>
      </body>
    </>
  );
}
