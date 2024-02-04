"use client"
import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null)

    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            fileSize: "1.5mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            fileSize: "1.5mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            fileSize: "1.5mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        }
    ]
    return (
        <div ref={ref} className="fixed z-[3] w-full h-full top-0 flex flex-wrap gap-3 p-3">
            {data.map((item, index) => (
                <Card data={item} key={index} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground