import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

class FaqsContent extends Component {
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="faq-area ptb-100">
                <div className="container">
                    <div className="tab faq-accordion-tab">
                        {/* Tab nav */}
                        <ul className="tabs d-flex flex-wrap justify-content-center">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <i className='bx bx-flag'></i>
                                <span>Getting Started</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <i className='bx bxs-badge-dollar'></i>
                                <span>Pricing & Plans</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab3')}
                            >
                                <i className='bx bx-shopping-bag'></i>
                                <span>General Question</span>
                            </li>

                           
                        </ul>

                        <div className="tab-content">
                            <div id="tab1" className="tabs-item">
                                <div className="faq-accordion">
                                    <Accordion>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What shipping methods are available?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>
                                                    We provide shiiping all over Mumbai and near by area of Mumbai , including Kalyan Dombivli Thane and palghar  within 2-4 hours of delivery
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What are shipping times and costs?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>
                                                    Shipping Cost depend upon location of order if order is near by 10km -20km of services is delivery free of cost.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        {/*  */}

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Delievry Partner?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>
                                                    We are Tied up with some awesome and trusted delievry partner like  Porter, Fedex, Bluedart .
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        {/*  */}
                                    </Accordion>
                                </div>
                            </div>

                            <div id="tab2" className="tabs-item">
                                <div className="faq-accordion">
                                    <Accordion>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                What is maximum & minimum quantity per order?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>
                                                    Our product comes with into Three different quantity 250 gm ,500gm,1kg.
                                                    you can order minimum 250gm and maximum upto 1kg
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                   subcription Model?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>
                                                    Our Subcription Model includes time to time delivery on selected days. within minimum efforts of pet parents , This Model benfits for Pet parents who has tight and busy schedule but also want to keep there pet healthy.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What payment methods can I use?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>
                                                    Credit Card,Online Payment and other options are also available
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                    </Accordion>
                                </div>
                            </div>

                            <div id="tab3" className="tabs-item">
                                <div className="faq-accordion">
                                    <Accordion>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                  What ingredients used in Making food?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>
                                                Ingredients like Tumeric ,coconut oil , basal leaf are used other with main ingredients . 
                                                safety and Hygiene are most taken care while preparing food.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What Is the Shell Life of Product?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>
                                                    We are currently working on Increasing The shell Life of product . But for now Our product can be cosumed Fresh , and can store upto 3 days in cold / freezer.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                   Why we are different From other pet Food?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>
                                                Our goal is simple: We want to create the best possible experience for both you and your dog by providing them with meals that are homemade, delicious, and nutritious. That's why we use only the finest ingredients and make sure each meal is packed with nutrition
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                    </Accordion>
                                </div>
                            </div>

                      
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqsContent;