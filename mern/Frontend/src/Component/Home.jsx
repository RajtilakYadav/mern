import React from 'react'

const Home = () => {
  return (
    <div>
  <>
  <header>
    <aside>
      <a href="Signup.jsx">
        <img
          src="https://eternitymarketing.com/assets/image-cache/blog/diy.f3f58320.jpg"
          alt="img"
        />
      </a>
      <ul>
        <li>
          <a href="#">
            <i className="fa-solid fa-house" />
            <b> Home</b>
          </a>{" "}
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-hashtag" />
            <b> Explore</b>
          </a>{" "}
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-bell" />
            <b> Motification</b>
          </a>{" "}
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-youtube" /> <b>Youtube</b>
          </a>{" "}
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-bookmark" /> <b>Bookmark</b>
          </a>{" "}
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-list" />
            <b> List</b>
          </a>{" "}
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-user" />
            <b> Profile</b>
          </a>{" "}
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-bars" />
            <b> More</b>
          </a>{" "}
        </li>
      </ul>
      <button>
        <b>Compose</b>
      </button>
    </aside>
    <section>
      <nav>
        <ul>
          <li>
            <a href="#">
              <b>About</b>
            </a>
          </li>
          <li>
            <a href="#">
              <b>Help</b>
            </a>
          </li>
        </ul>
        <div className="search_bar">
          <i className="fa-solid fa-magnifying-glass" />
          <input type="text" placeholder="Search on Compose" />
        </div>
        <div className="user">
          <h5>Hey,Raj</h5>
          <img
            src="https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg"
            alt="img"
          />
        </div>
      </nav>
      <section></section>
    </section>
  </header>
  <main></main>
  <footer></footer>
</>
    </div>
  )
}

export default Home