import React from 'react';
import Image from "next/image";
import {MdPlayCircleFilled} from "react-icons/md";
import {IconType} from "react-icons";

interface IBarItem {
    id: number,
    image?: string,
    badge: string,
    title: string,
    about: string,
    description: string,
    button: {
        icon: React.ReactElement<IconType>,
        text: string
    }
}

const barItems: IBarItem[] = [
    {
        id: 1,
        image: '/astronaut.png',
        badge: '🔥 Available Now',
        title: 'How to use the new version of the admin dashboard?',
        about: 'Takes 4 minutes to learn',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est libero nam nihil repellendus! Eius est excepturi nobis obcaecati voluptas.',
        button: {
            icon: <MdPlayCircleFilled/>,
            text: 'Watch'
        }
    },
    {
        id: 2,
        badge: '🚀 Coming soon',
        title: 'New server actions are available, partial pre-rendering is coming up!',
        about: 'Boost your productivity',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est libero nam nihil repellendus! Eius est excepturi nobis obcaecati voluptas.',
        button: {
            icon: <MdPlayCircleFilled/>,
            text: 'Learn'
        }
    }
]

const Rightbar = () => {
    return (
        <div className='flex flex-col gap-y-5 fixed'>
            {
                barItems.map(item => (
                    <div key={item.id}
                         className='relative bg-slate-300 dark:bg-gradient-to-b dark:from-slate-800 dark:to-dark-900 p-5 rounded-l-md'>
                        {
                            item.image && (
                                <div className='absolute bottom-0 right-0 w-1/2 h-1/2'>
                                    <Image src={item.image} alt='astronaut' fill className='object-contain opacity-20'/>
                                </div>
                            )
                        }
                        <div className='flex flex-col gap-y-5'>
                            <p className='font-semibold'>{item.badge}</p>
                            <h3 className='text-xl font-bold'>{item.title}</h3>
                            <p className='font-medium text-sm text-slate-500 dark:text-slate-400'>{item.about}</p>
                            <p className='font-medium text-xs text-slate-500 dark:text-slate-400'>{item.description}</p>
                            <button
                                className='flex items-center gap-x-2.5 bg-slate-400 dark:bg-indigo-900 px-2.5 py-1.5 rounded-md w-fit'>
                                {item.button.icon}
                                {item.button.text}
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default Rightbar;