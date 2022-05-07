import React from 'react'
import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'

const News = () => {
    return (
        <div>
            <div>
                <p>News</p>
                <h3>Our Latest news and articles</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adispiscing elit. At elementum proin egestas turpis. Tictiduct loe duis donec sed.</p>
                <Link href='/' passHref>
                    <a>All Articles <BsArrowUpRight /></a>
                </Link>
            </div>
            <div>News Cards</div>
        </div>
    )
}

export default News