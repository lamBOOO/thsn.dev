import Link from "next/link"
import React, { Component } from "react";

export default function Badge({ icon, left, right, lc, rc, textcolor, link }: any) {
  const badge =
    <span className={`border-gray-500 hover:border-black ${textcolor}`}>
      <span className={`border-inherit border-t border-l border-b text-xs font-mono inline-flex items-center rounded-tl rounded-bl px-2 py-0.5 ${lc} font-bold`}>
        {icon != undefined ? left != undefined ? <span className="pr-1">{icon}</span> : <span>{icon}</span> : ""}
        {left}
      </span>
      <span className={`border-inherit border-t border-r border-b text-xs inline-flex items-center rounded-tr rounded-br px-2 py-0.5 ${rc} font-mono`}>
        {right}
      </span>
    </span>
  if (link != undefined) {
    return (
      <Link href={`${link}`}>
        {badge}
      </Link>
    )
  } else {
    return badge
  }
}
