import { Fragment } from 'react';
import Header from '../../layouts/Header/index';
import Footer from '../../layouts/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <div className='container-main'>
                <h1>Home Page Work !</h1>
            </div>
            <Footer />
        </>
    )
}