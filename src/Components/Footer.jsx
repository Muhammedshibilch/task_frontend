import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
     <footer className="bg-gray-100 py-8 text-gray-700">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {/* Logo & Quick Links */}
                    <div className="col-span-1">
                        <img src={logo} alt="ASAP Logo" className="h-12 mb-4" />
                        <ul className="space-y-1 text-sm">
                            {["About Us", "Careers", "Blogs", "Press Release", "Jobs", "FAQ's", "Internship", "Job Fair", "Placement", "Testimonials", "Grievances", "Contact Us", "Privacy Policy", "Terms & Conditions", "Sitemap"].map((link, index) => (
                                <li key={index} className="hover:text-purple-600 cursor-pointer">{link}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Internship by Stream */}
                    <div>
                        <h4 className="font-semibold text-gray-900">Internship by Stream</h4>
                        <ul className="text-sm space-y-1">
                            {["Computer Science", "Electronics", "Marketing", "Finance", "Civil", "Chemical", "View all Internship"].map((item, index) => (
                                <li key={index} className="hover:text-purple-600 cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Jobs by Stream */}
                    <div>
                        <h4 className="font-semibold text-gray-900">Jobs by Stream</h4>
                        <ul className="text-sm space-y-1">
                            {["Marketing", "Web Development", "Sales", "Finance", "Digital Marketing", "Content Writing", "View all Jobs"].map((item, index) => (
                                <li key={index} className="hover:text-purple-600 cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Guaranteed Courses */}
                    <div>
                        <h4 className="font-semibold text-gray-900">Guaranteed Courses</h4>
                        <ul className="text-sm space-y-1">
                            {["HR Management", "Digital Marketing", "Electric Vehicle", "UI/UX Design", "Product Management", "Full Stack Development", "Data Science"].map((item, index) => (
                                <li key={index} className="hover:text-purple-600 cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Explore Companies */}
                    <div>
                        <h4 className="font-semibold text-gray-900">Explore Companies</h4>
                        <ul className="text-sm space-y-1">
                            {["Top Companies", "IT Companies", "MNC’s", "Startup", "Product Based", "Govt. PSU", "View all Companies"].map((item, index) => (
                                <li key={index} className="hover:text-purple-600 cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Support & Contact Section */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8 shadow-md">
                    <h4 className="font-semibold text-gray-900">Are you having any issues?</h4>
                    <div className="flex flex-col space-y-2 text-sm">
                        <div className="flex items-center">
                            <img src="https://careerlink.asapkerala.gov.in/img/icons/foot-mail.svg" alt="Email" className="h-5 w-5 mr-2" />
                            <span>placementsupport@asapkerala.gov.in</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://careerlink.asapkerala.gov.in/img/icons/foot-call.svg" alt="Call" className="h-5 w-5 mr-2" />
                            <span>0471-2772523</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            ASAP Kerala, KINFRA Film and Video Park, Sainik School P.O, Chanthavila, Thiruvananthapuram, Kerala, India-695585
                        </p>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="mt-4">
                        <h4 className="font-semibold text-gray-900">Newsletter</h4>
                        <p className="text-sm text-gray-600">Never miss a beat with our newsletter updates!</p>
                        <div className="flex mt-2">
                            <input type="email" placeholder="Enter your email address" className="w-full border border-gray-300 p-2 rounded-l-md text-sm focus:outline-none" />
                            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md text-sm font-bold">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-4 mt-6">
                    {[
                        { icon: "https://careerlink.asapkerala.gov.in/img/icons/facebook.svg", alt: "Facebook" },
                        { icon: "https://careerlink.asapkerala.gov.in/img/icons/instagram.svg", alt: "Instagram" },
                        { icon: "https://careerlink.asapkerala.gov.in/img/icons/x.svg", alt: "Twitter" },
                        { icon: "https://careerlink.asapkerala.gov.in/img/icons/x.svg", alt: "LinkedIn" },
                        { icon: "https://careerlink.asapkerala.gov.in/img/icons/x.svg", alt: "YouTube" }
                    ].map((social, index) => (
                        <img key={index} src={social.icon} alt={social.alt} className="h-6 w-6 cursor-pointer hover:opacity-75" />
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    © 2024 ASAP Kerala. All Rights Reserved | Powered by SRV InfoTech
                </p>
            </div>
        </footer>
    
    
    </>
  )
}

export default Footer