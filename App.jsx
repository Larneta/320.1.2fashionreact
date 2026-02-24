import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Footer from "./Footer";
import "./App.css";
import imageOne from "./plain-blog/blog-image-1.jpg";
import imageTwo from "./plain-blog/blog-image-2.jpg"; 

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />

      <Article
        date="11/12/20"
        title="On the Street in Brooklyn"
        image={imageOne}
        content="Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. 
                Temporibus perscpiciatis at impedit voluptas aut voluptates facere totam aliguid debitis rerum, ex consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque.
                Fugit, cum, cupidiate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit consequatur rem quaerat voluptatibus pariatur quas, quod quisquam quo ab molestiae."
      />

      <Article
        date="11/11/20"
        title="On the Street in Brooklyn"
        image={imageTwo}
        content="Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias.
                Temporibus perscpiciatis at impedit voluptas aut voluptates facere totam aliguid debitis rerum, ex consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque.
                Fugit, cum, cupidiate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit consequatur rem quaerat voluptatibus pariatur quas, quod quisquam quo ab molestiae."
      />

      <Footer />
    </div>
  );
}

export default App;
