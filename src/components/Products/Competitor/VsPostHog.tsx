import CloudinaryImage from 'components/CloudinaryImage'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Logo from 'components/Logo'

export const VsPostHog = ({ children }) => {
    return (
        <div
            className={`rounded-md p-4 border-2 border-blue dark:border-blue bg-white/50 dark:bg-accent-dark`}
        >
            <h4 className="leading-tight gap-2">
                <span className="inline-block mr-1">Reasons to choose</span> <Logo className="w-32 inline-block -mt-2" />
            </h4>
            <div className="flex flex-col md:flex-row-reverse gap-4">
                <div className="shrink-0 basis-[145px] text-center">
                    <CloudinaryImage
                        src="https://res.cloudinary.com/dmukukwp6/image/upload/posthog.com/src/images/products/competitors-hog.png"
                        className="max-w-[145px]"
                        placeholder="none"
                    />
                </div>
                <div className="flex-1 mb-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}
