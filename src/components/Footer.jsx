import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 mt-10 pt-8 pb-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                <div>
                    <img src="/logo.png" alt="ASTA Logo" className="h-10 mb-2" />
                    <p className="font-bold text-lg">ASTA Training Academy</p>
                    <div className="flex gap-2 mt-2">
                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" aria-label="Snapchat"><i className="fab fa-snapchat-ghost"></i></a>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Academy</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/about">Who We Are</a></li>
                        <li><a href="/board-members">Board Members</a></li>
                        <li><a href="/accreditations">Accreditations</a></li>
                        <li><a href="/media-center">Media Center</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Programs</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/programs">All Programs</a></li>
                        <li><a href="/courses">Professional Courses</a></li>
                        <li><a href="/registration">Online Registration</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Other Links</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/student-services">Student Services</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto mt-8 border-t border-gray-600 pt-4 text-center">
                <p>&copy; {new Date().getFullYear()} All rights reserved to ASTA Training Academy</p>
            </div>
        </footer>
    );
}

