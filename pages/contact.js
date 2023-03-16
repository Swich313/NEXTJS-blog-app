import Head from 'next/head';

import ContactForm from "@/components/Contact/ContactForm";

const ContactPage = () => {
    return (<>
        <Head>
            <title>Contact me</title>
            <meta name="description" content="Send mw your message"/>
        </Head>
        <ContactForm />
    </>);
};

export default ContactPage;
