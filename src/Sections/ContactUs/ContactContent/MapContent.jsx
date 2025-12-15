import React from 'react'

export default function MapContent() {
    return (
        <div>
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Find Our Store</h2>
                <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.21640584772044!2d67.08340155085675!3d24.882201229130345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eb5cd03b92b%3A0xae6a9089183bced0!2sDigiTrends!5e0!3m2!1sen!2s!4v1765785554685!5m2!1sen!2s" width="100%" height="450"  loading="lazy" ></iframe>
                    <div className="bg-white p-4 text-center">
                        <p className="text-gray-600">📍 Located in the heart of New Delhi's fashion district</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
