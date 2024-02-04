'use client'
import React, { useRef } from 'react'
import { ArrowDownToLine, FileText, X } from 'lucide-react';
import { motion } from "framer-motion"

interface CardProps {
    data: {
        desc: string,
        fileSize: string,
        close: boolean,
        tag: {
            isOpen: boolean,
            tagTitle: string,
            tagColor: string
        }
    },
    // react ref hook
    reference: React.RefObject<HTMLDivElement>


}
const Card = ({ data, reference }: CardProps) => {
    return (
        <motion.div drag dragConstraints={reference}
            whileDrag={{ scale: 1.1 }}
            whileHover={{ scale: 1.1 }}
            className='relative w-60 bg-neutral-900/70 h-72 rounded-[50px] overflow-hidden text-white py-7 px-5
        flex-shrink-0
        cursor-pointer
        '>
            <FileText />
            <p className='mt-4 text-sm font-semibold '>
                {data.desc}
            </p>
            <div className='absolute  bottom-0 w-full left-0'>
                <div className='flex justify-between items-center px-8 mb-5' >
                    <p className='text-sm '>
                        {data.fileSize}
                    </p>
                    <div className='cursor-pointer bg-neutral-700 rounded-full p-1 '>
                        {
                            data.close ? <X size={15} /> : <ArrowDownToLine size={15} />
                        }

                    </div>
                </div>
                {
                    data.tag.isOpen &&
                    <div className={`flex justify-center bg-green-600 bg-${data.tag.tagColor}-600 items-center w-full p-3`}>
                        <p className='text-white text-sm font-semibold '>
                            {data.tag.tagTitle}
                        </p>
                    </div>}
            </div>
        </motion.div>
    )
}

export default Card