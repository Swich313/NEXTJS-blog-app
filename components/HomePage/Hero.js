import Image from 'next/image';

import classes from './Hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/avatar.jpg" alt="author photo" width={300} height={300} />
            </div>
            <h1>I am Andrew</h1>
            <p>I practise in WebDev: Nodejs, Reactjs, Nextjs and so on</p>
        </section>
    );
};

export default Hero;