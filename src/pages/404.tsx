import React from 'react'
import { useRouter } from 'next/router'

const notFoundPage = () => {
    const router = useRouter()

    React.useEffect(() => {
        router.replace('/')
    })
    return null;
}

export default notFoundPage