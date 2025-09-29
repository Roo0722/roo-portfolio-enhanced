import React from 'react';

const Resume = () => {
    return (
        <section className="bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-4">Resume</h1>
            <p className="mb-4">Here is my resume detailing my experience and skills.</p>
            <a href="/resume.pdf" download>
                <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
                    Download Resume
                </button>
            </a>
        </section>
    );
};

export default Resume;