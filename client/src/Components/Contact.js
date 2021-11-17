import React from 'react'

const Contact = () => {
    return (
        <>
        <section className="menu container mx-auto py-8">
            <div className="contact_info">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-12 gap-y-16">
                    <div className="contact_info_item flex justify-center items-center shadow-lg">
                        <img src="" alt="phone" />
                        <div className="contact_info_content">
                        <div className="contact_info_title">
                            Mail
                        </div>
                        <div className="contact_info_text">
                            Foodiez@gmail.com
                        </div>
                        </div>
                    </div>
                    <div className="contact_info_item flex justify-center items-center shadow-lg">
                        <img src="" alt="phone" />
                        <div className="contact_info_content">
                        <div className="contact_info_title">
                            Address
                        </div>
                        <div className="contact_info_text">
                            Pune,MH,India
                        </div>
                        </div>
                    </div>
                    <div className="contact_info_item flex justify-center items-center shadow-lg">
                        <img src="" alt="phone" />
                        <div className="contact_info_content">
                        <div className="contact_info_title">
                            Phone
                        </div>
                        <div className="contact_info_text">
                            +91 1234 565 256
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </section>

        <section className="menu container mx-auto py-8">
            <div className="contact_form">
                <div className="container ">
                    <div className="contact_form_title">
                        Get in touch
                    </div>
                    <form id="contact_form">
                        <div className="contact_form_name flex justify-center items-center">
                            <input type="text" id="contact_form_name" className="contact_form_name input _field" placeholder="Your Name" required="true"/>

                            <input type="email" id="contact_form_email" className="contact_form_email input _field" placeholder="Your Email" required="true"/>

                            <input type="number" id="contact_form_phone" className="contact_form_phone input _field" placeholder="Your Phone Number" required="true"/>

                        </div>

                        <div className="contact_form_text">
                            <textarea className="text_field contact_form_message" placeholder="Message" id="" cols="30" rows="10"></textarea>
                        </div>

                        <div className="contact_form_button">
                            <button type="submit" className="button conatct_submit_button">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>


        </>
    )
}

export default Contact
