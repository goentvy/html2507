import React from 'react';
import '../css/section.css';

const ArticleNav = [
    {
        id: 1,
        left_nav: 'Browse The Category',
        right_nav: 'See All Category',
    },
    {
        id: 2,
        left_nav: 'CSS',
        right_nav: 'See All Category',
    },
    {
        id: 3,
        left_nav: 'Javascript',
        right_nav: 'See All Category',
    },
    {
        id: 4,
        left_nav: 'React JS',
        right_nav: 'See All Category',
    },
]

const cards = [
    {id: 1, name: 'CSS', img: './images/css_icon.png', alt: 'CSS3'},
    {id: 2, name: 'Javascript', img: './images/js_icon.png', alt: 'Javascript'},
    {id: 3, name: 'TailWind', img: './images/tailwind_icon.png', alt: 'TailWind'},
    {id: 4, name: 'Vue JS', img: './images/vue_icon.png', alt: 'VueJS'},
    {id: 5, name: 'React JS', img: './images/react_icon.png', alt: 'ReactJS'},
];

const author = { name: 'Entvy', date: 'July 22, 2025 ∙ 3 Min Read', img: './images/logo.png', }

const browse_list = [
    {id: 1, text: 'Fundamental Of Javascript', img: './images/code_1.jpg', alt: "code_1"},
    {id: 2, text: 'Grid CSS Make Your Life Easier', img: './images/code_2.jpg', alt: "code_2"},
    {id: 3, text: 'Make Animated Light Mode And Dark Mode Toggle With CSS', img: './images/code_3.jpg', alt: "code_3"},
    {id: 4, text: 'Make Tic Tac Toe Games With React JS', img: './images/code_4.jpg', alt: "code_4"},
];

const css_list = [
    {id: 1, text: 'Flexbox CSS : Everything You Need To Know', img: './images/code_5.jpg', alt: "code_5"},
    {id: 2, text: 'Grid CSS Make Your Life Easier', img: './images/code_6.jpg', alt: "code_6"},
    {id: 3, text: '3 Easy Way To Make Div Center', img: './images/code_7.jpg', alt: "code_7"},
    {id: 4, text: 'Make Animated Light Mode And Dark Mode Toggle With CSS', img: './images/code_8.jpg', alt: "code_8"},
];

const js_list = [
    {id: 1, text: 'Array In Javascript - Learn JS # 3', img: './images/code_1.jpg', alt: "code_1"},
    {id: 2, text: 'Fundametal Of Javascript', img: './images/code_2.jpg', alt: "code_2"},
    {id: 3, text: '7 Project With Javascript You Must Try For Your Portfolio', img: './images/code_3.jpg', alt: "code_3"},
    {id: 4, text: 'Make Simple Calculator With Javascript', img: './images/code_4.jpg', alt: "code_4"},
];

const react_list = [
    {id: 1, text: 'First Month Of Leaning React JS', img: './images/code_5.jpg', alt: "code_5"},
    {id: 2, text: 'Build Markdown Editor With React JS', img: './images/code_6.jpg', alt: "code_6"},
    {id: 3, text: 'Getting Started With React JS', img: './images/code_7.jpg', alt: "code_7"},
    {id: 4, text: 'Make Tic Tac Toe Games With React JS', img: './images/code_8.jpg', alt: "code_8"},
];

function NavList({ nav, category }) {
    if(category === 'Category') {
        return (
            <div className="section_category_nav" key={nav.id}>
                <div className="category_left">
                    <span>{nav.left_nav}</span>
                    <img src="./images/minus.png" alt="line" />
                </div>
                <div className="category_right">
                    <span>{nav.right_nav}</span>
                    <img src="./images/arrow_right.png" alt="arrow_right" />
                </div>
            </div> 
        );
    } else if (category === 'Article'){
        return (
            <div className="nav_wrap" key={nav.id}>
                <div className="section_article_nav">
                    <div className="article_nav_left">
                        <span>{nav.left_nav}</span>
                        <img src="./images/minus.png" alt="line" />
                    </div>
                    <div className="article_nav_right">
                        <span>{nav.right_nav}</span>
                        <img src="./images/arrow_right.png" alt="arrow_right" />
                    </div>
                </div>
            </div>
        );
    }
}

function ArticleList({ category }) {
    return (
        category.map(list => 
            <div className="article_list_wrap" key={list.id}>
                <div className="article_list">
                    <img src={list.img} alt={list.alt} />
                    <p>{list.text}</p>
                    <div className="author">
                        <img src={author.img} alt="author" />
                        <div className="author_pack">
                        <p>{author.name}</p>
                        <span>{author.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

function CategoryCard({ cards }) {
    return (
        cards.map(card =>
            <div className="category_card" key={card.id}>
                <div className="card_pack">
                    <img src={card.img} alt={card.alt} />
                    <div className="card_name">{card.name}</div>
                </div>
            </div>
        )
    )
}

function Section() {
    return (
        <>
            <section className="section_category">
                <NavList nav={ArticleNav[0]} category='Category'/>
                <div className="section_card_wrap">
                    <CategoryCard cards={cards}/>
                </div>
            </section>
            <section className="section_article">
                <NavList nav={ArticleNav[0]} category='Article'/>
                <div className="section_article_wrap">
                    <ArticleList category={browse_list} />
                </div>
            </section>
            <section className="section_article">
                <NavList nav={ArticleNav[1]} category='Article'/>
                <div className="section_article_wrap">
                    <ArticleList category={css_list} />
                </div>
            </section>
            <section className="section_article">
                <NavList nav={ArticleNav[2]} category='Article'/>
                <div className="section_article_wrap">
                    <ArticleList category={js_list} />
                </div>
            </section>
            <section className="section_article">
                <NavList nav={ArticleNav[3]} category='Article'/>
                <div className="section_article_wrap">
                    <ArticleList category={react_list} />
                </div>
            </section>
            <div className="more_article">
                <button className="more_article_btn">More Article</button>
            </div>
        </>
    );
}

export default Section;