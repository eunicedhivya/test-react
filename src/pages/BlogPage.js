import React from 'react';
import Title from '../components/Title';
import blogList from '../data/blogList';

function BlogPage() {
    return (
        <div>
            <header className="b-title">
                <Title title='Blog' span="Blog" />
            </header>
            <div className="BlogsPage">
                {
                    blogList.map((story)=>{
                        return (
                            <div className="blog" key={story.id}>
                                <div className="blog-content">
                                    <img src={story.image} alt="" />
                                    <a href={story.link} className="blog-link">
                                        {story.title}
                                    </a>
                                </div>
                            </div>
                        )

                    })
                }


            </div>
        </div>
    )
}

export default BlogPage
