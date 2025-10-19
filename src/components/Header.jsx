import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

<<<<<<< HEAD

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)

    // state to track if contact form is open
    const [contactFromOpen, setContactFormOpen] = useState(false);

    const openContactForm = () => setContactFormOpen(true)
    const closeContactForm = () => setContactFormOpen(false)
=======
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    // state to track if contact form is open
    const [contactFromOpen, setContactFormOpen] = useState(false);
    const openContactForm = () => setContactFormOpen(true);
    const closeContactForm = () => setContactFormOpen(false);

    // ✅ Profile picture upload state and handler
    const [profilePic, setProfilePic] = useState(null);
    const handleProfilePicUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setProfilePic(reader.result);
            reader.readAsDataURL(file);
        }
    };
>>>>>>> temp-backup

    return (
        <header className="absolute w-full z-50 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
<<<<<<< HEAD
=======
                {/* Logo */}
>>>>>>> temp-backup
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
<<<<<<< HEAD
                        type: "spring",      // ✅ colon instead of =
                        stiffness: 100,      // ✅ fixed spelling
=======
                        type: "spring",
                        stiffness: 100,
>>>>>>> temp-backup
                        damping: 25,
                        delay: 0.3,
                        duration: 1.2,
                    }}
                    className="flex items-center"
                >
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
                        N
                    </div>
<<<<<<< HEAD

=======
>>>>>>> temp-backup
                    <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                        Nist_Match
                    </span>
                </motion.div>

<<<<<<< HEAD
                {/* desktop navigation */}
=======
                {/* Desktop nav */}
>>>>>>> temp-backup
                <nav className="lg:flex hidden space-x-8">
                    {["Home", "About", "Matches", "Profile", "Contact"].map((item, index) => (
                        <motion.a
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: 0.7 + index * 0.2,
                            }}
<<<<<<< HEAD
                            className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                            href="#">
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
                        </motion.a>

                    ))}
                </nav>

                {/* social icons - Desktop */}
                <div className="md:flex hidden items-center space-x-4">

                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" href="#">
                        <FiGithub className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" href="#">
                        <FiTwitter className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" href="#">
                        <FiLinkedin className="w-5 h-5" />
                    </motion.a>


                    {/* button */}
=======
                            className="relative text-gray-200 hover:text-violet-400 font-medium transition-colors duration-300 group"
                            href="#"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
                        </motion.a>
                    ))}
                </nav>

                {/* Socials + button */}
                <div className="md:flex hidden items-center space-x-4">
                    {[FiGithub, FiTwitter, FiLinkedin].map((Icon, i) => (
                        <motion.a
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.3, duration: 0.8 }}
                            className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
                            href="#"
                        >
                            <Icon className="w-5 h-5" />
                        </motion.a>
                    ))}

>>>>>>> temp-backup
                    <motion.button
                        onClick={openContactForm}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.6,
                            duration: 0.8,
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                        }}
<<<<<<< HEAD
                        className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500">
                        Fix Match
                    </motion.button>
                </div>

                {/* mobile Menu button */}
=======
                        className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
                    >
                        Create your profile
                    </motion.button>
                </div>

                {/* Mobile menu button */}
>>>>>>> temp-backup
                <div className="md:hidden flex items-center">
                    <motion.button
                        whileTap={{ scale: 0.7 }}
                        onClick={toggleMenu}
<<<<<<< HEAD
                        className="text-gray-300">

                        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}

=======
                        className="text-gray-300"
                    >
                        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
>>>>>>> temp-backup
                    </motion.button>
                </div>
            </div>

<<<<<<< HEAD
            {/* Contact form */}
=======
            {/* Contact Form */}
>>>>>>> temp-backup
            <AnimatePresence>
                {contactFromOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
<<<<<<< HEAD
                        className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4"

                    >

=======
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
>>>>>>> temp-backup
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 30 }}
                            transition={{
                                type: "spring",
                                damping: 30,
                                stiffness: 200,
<<<<<<< HEAD
                                duration: 0.8
                            }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-2xl font-bold text-gray-300">
                                    Get in Touch
                                </h1>

=======
                                duration: 0.8,
                            }}
                            className="bg-gray-900 text-gray-300 w-full h-full overflow-y-auto p-6 sm:p-10 rounded-none"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-2xl font-bold text-gray-200">About You</h1>
>>>>>>> temp-backup
                                <button onClick={closeContactForm}>
                                    <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
                                </button>
                            </div>

<<<<<<< HEAD
                            {/* input forms */}
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                        Message
                                    </label>
                                    <input
                                        type="message"
                                        id="message"
                                        placeholder="Your Message"
                                        className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                                    />
                                </div>
=======
                            {/* ✅ Profile Picture Upload */}
                            <div className="flex flex-col items-center mb-8">
                                <div className="relative">
                                    <img
                                        src={profilePic || "https://via.placeholder.com/120"}
                                        alt=""
                                        className="w-28 h-28 rounded-full object-cover border-4 border-violet-600 shadow-lg"
                                    />
                                    {/* Camera icon overlay */}
                                    <label
                                        htmlFor="profilePic"
                                        className="absolute bottom-0 right-0 bg-violet-600 text-white p-2 rounded-full cursor-pointer hover:bg-violet-700 transition flex items-center justify-center"
                                        style={{
                                            transform: "translate(20%, 20%)",
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 11c.828 0 1.5.672 1.5 1.5S12.828 14 12 14s-1.5-.672-1.5-1.5S11.172 11 12 11zM4 7h3l1-2h8l1 2h3a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1z"
                                            />
                                        </svg>
                                    </label>

                                    {/* Hidden file input */}
                                    <input
                                        id="profilePic"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleProfilePicUpload}
                                    />
                                </div>

                                <p className="text-sm text-gray-400 mt-2">Upload your profile picture</p>
                            </div>

                            {/* ✅ Form Fields */}
                            <form className="space-y-4">
                                {[
                                    "Name",
                                    "Email",
                                    "Age",
                                    "Gender",
                                    "Location",
                                    "Occupation",
                                    "My Hobbies",
                                    "What makes me unique",
                                    "My type",
                                    "Height",
                                    "Weight",
                                    "Figure and Skin color",
                                    "Education",
                                    "Pets",
                                    "Languages",
                                    "Zodiac sign",
                                    "Habits",
                                ].map((label) => (
                                    <div key={label}>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">
                                            {label}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={`Your ${label}`}
                                            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-gray-200 placeholder-gray-400"
                                        />
                                    </div>
                                ))}

                                {/* ✅ Relationship Type */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">
                                        Kind of relationship I am looking for
                                    </label>
                                    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 text-gray-300">
                                        {["Casual", "Serious", "Friendship"].map((type) => (
                                            <label key={type} className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    name="relationshipType"
                                                    value={type.toLowerCase()}
                                                    className="accent-violet-500"
                                                />
                                                <span>{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

>>>>>>> temp-backup
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
<<<<<<< HEAD
                                    className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50">
                                    Send Message
                                </motion.button>
                            </form>

=======
                                    className="w-full px-4 py-2 mt-6 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50 font-semibold text-white"
                                >
                                    Save
                                </motion.button>
                            </form>
>>>>>>> temp-backup
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
<<<<<<< HEAD

=======
>>>>>>> temp-backup
        </header>
    );
};

export default Header;
