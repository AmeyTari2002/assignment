import React from 'react'
import Header from './Header'
import Model from './Model'
import Card from './Card'
import Signup from './Signup'
import Footer from './Footer'
import icon1 from '../assets/icon1.png'
import star from '../assets/star1.png'
import star2 from '../assets/star4.5.png'
import diamond from '../assets/diamond.png'
import showMore from '../assets/image3.png'
import star4 from '../assets/4star.png'

const Main = () => {
    return (
        <>
            <div className=' max-w-[1055px] bg-[#FBFCFD]  mx-auto'>
                <Header />
                <Model
                    BestChoice={true}
                    BestImg={icon1}
                    number="1"
                    BestText="Best Choice"
                    Builder="Builder 1"
                    heading="WixPro 72-Inch Responsive Website Builder-"
                    para="Comprehensive Digital Platform Creation Tool, Streamlined 
                    Design Interface for Professional Websites and Online Stores (Black/Blue)"
                    highlights="Main highlights"
                    para2="[What You Get]: Receive the WixPro website builder suite, access to premium design templates,
                    an extensive library of widgets and apps, and detailed step-by-step guides."
                    show="Show more"
                    showimg={true}
                    showMoreimg={showMore}
                    rating="9.8"
                    review="Exceptional"
                    stars={star}
                    content={false}
                    height="255"
                />
                <Model
                    BestChoice={true}
                    BestImg={diamond}
                    number="2"
                    BestText="Best Value"
                    Builder="Builder "
                    heading="SiteCraft 68-Inch Ultimate Web Design Studio- "
                    para="Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce 
                    Platforms (Green/White)"
                    highlights="Main highlights"
                    para2="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design
                    elements, SEO optimization tools, and e-commerce integrations."
                    show="Show more"
                    showimg={true}
                    showMoreimg={showMore}
                    rating="9.5"
                    review="Excellent"
                    stars={star2}
                    content={false}
                    height="255"
                />
                <Model
                    BestChoice={false}
                    BestImg={icon1}
                    number="3"
                    BestText="Best Choice"
                    Builder="Builder 1"
                    heading="WixPro 72-Inch Responsive Website Builder-"
                    para="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional
                    Websites and Online Stores (Black/Blue)"
                    highlights="Main highlights"
                    para2="[What You Get]: Receive the WixPro website builder suite, access to premium design templates,
                    an extensive library of widgets and apps, and detailed step-by-step guides."
                    show="Show more"
                    showimg={false}
                    showMoreimg={showMore}
                    rating="9.3"
                    review="Exceptional"
                    stars={star}
                    content={false}
                    height="255"
                />
                <Model
                    BestChoice={false}
                    BestImg={icon1}
                    number="4"
                    BestText="Best Choice"
                    Builder="CDK"
                    heading="WixPro 72-Inch Responsive Website Builder-"
                    para="An extensive library of widgets and apps, and detailed step-by-step guides."
                    content={true}
                    highlights="Main highlights"
                    para2={false}
                    show="Show More"
                    showimg={false}
                    showMoreimg={showMore}
                    rating="9.1"
                    review="Very Good"
                    stars={star4}
                    height="436"
                />
                <h1 className='text-[26px] ml-4 md:mx-0 md:text-[32px] mt-20'>Related deals you might like for</h1>
                <div className='flex flex-col md:flex-row ml-5 md:flex md:ml-2 gap-4    ' >
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Signup />
            </div>
            <Footer />
        </>
    )
}

export default Main