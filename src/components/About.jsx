import React from 'react';
import Image from 'next/image';

const About = () =>{
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p>About</p>

                    <h2>Who I am</h2>

                    <p>Lorem ipsum dolor sit.</p>

                    <p>Lorem ipsum dolor, sit amet 
                        consectetur adipisicing elit. Accusantium harum fuga 
                        fugiat laborum officia vero incidunt in, omnis 
                        corrupti ut aspernatur consequuntur hic ratione ab 
                        deleniti deserunt.
                    </p>

                    <p>Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Voluptate nam provident 
                        nesciunt ipsam inventore consequatur quis 
                        saepe, at labore expedita ducimus aut 
                        necessitatibus non nulla atque repellendus? 
                        Dolores, at maxime.
                    </p>

                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check some of my latest projects</p>

                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src='/../public/assets/makhi-mangxola.png' 
                    alt='' 
                    width='1000' 
                    height='1500'/>
                </div>

            </div>
        </div>
    );
}

export default About;