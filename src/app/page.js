"use client"
import Image from "next/image";
import { FaBars, FaGift, FaHeart } from "react-icons/fa6";
import { FaFacebook, FaSearch, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [dropDown, unDropDown] = useState(false)
  let dropDownMenu = () => {
    unDropDown(dropDownMenu => !dropDownMenu)
  }
  return (
    <section>
      <main>
        <section>
          <div>
            <div className="home">
              <Image src="/etsy logo.png" alt='' width={70} height={70} />
              <div className=" bars">
                <div></div>
                 <FaBars>
               <div>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Documents</Link>
                <Link href={'/'}>Premium</Link>
                <Link href={'/'}>Template</Link>
                <Link href={'/'}>Blog</Link>
                </div>
               </FaBars>
                <p>Categories</p>             
                   <button>Suscribe</button>
                <div className="search-bar">
                  <input type="search" placeholder="...search anything" />
                  <div className="bts">
                    <FaSearch />
                  </div>
                </div>
                <div className="hero">
                  <h6> <FaGift /> gift mode</h6>
                  <h6> Shop Birthday Gift</h6>
                  <h6>Home Favourite</h6>
                  <h6>Fashion Finds</h6>
                  <h6>Registry</h6>
                </div>
              </div>
              <div className="links">
                <div className="para">
                  <p><a>Sign In</a></p>
                </div>
                <a><FaHeart /></a>
                <a><FaGift /></a>
                <a><FaShoppingCart /></a>
              </div>
            </div>
          </div>
        </section>

      </main>
      {/* //front-syd/// */}

      <section>
        <div className="front">
          <h2>Check out the biggest trends</h2>
          <div className="front-links">
            <div className="box">
              <div className="box1">
                <Image src="/kidscloth.jpg" alt='' width={60} height={60} className="fish" />
                <p>Kid`s <br></br> Costume</p>
              </div>
            </div>
            <div className="box">
              <div className="box1">
                <Image src="/light.jpg" alt='' width={60} height={60} className="fish" />
                <p>Vintage <br></br> Lights</p>
              </div>
            </div>
            <div className="box">
              <div className="box1">
                <Image src="/fishtoy.jpg" alt='' width={60} height={60} className="fish" />
                <p>Stuffed Toys</p>
              </div>
            </div>
            <div className="box">
              <div className="box1">
                <Image src="/wreath.jpg" alt='' width={60} height={60} className="fish" />
                <p>Wreath</p>
              </div>
            </div>
            <div className="box">
              <div className="box1">
                <Image src="/signetring.jpg" alt='' width={60} height={60} className="fish" />
                <p>Signet <br></br> Rings</p>
              </div>
            </div>
            <div className="box">
              <div className="box1">
                <Image src="/bed.jpg" alt='' width={60} height={60} className="fish" />
                <p>Striped Bed</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className="gifts">
        <div>
          <h3>Shop our popular gift categories</h3>
          
        </div >
        <div className="oboy">
          <div className="gifts-links">
            <div className="gifts-box">
              <Image src="/annivary.jpeg" alt="" width={250} height={4000} />
              <p>Anniversary gifts</p>
            </div>
          </div>
          <div className="gifts-links">
            <div className="gifts-box">
              <Image src="/bracelet.jpeg" alt="" width={250} height={400} />
              <p>Gift for him</p>
            </div>
          </div>
          <div className="gifts-links">
            <div className="gifts-box">
              <Image src="/necklace.jpeg" width={250} height={400} />
              <p>Gifts for her</p>
            </div>
          </div>
          <div className="gifts-links">
            <div className="gifts-box">
              <Image src="/butter.jpeg" width={250} height={440} />
              <p>Personalized gift ideas</p>
            </div>
          </div>
          <div className="gifts-links">
            <div className="gifts-box">
              <Image src="/wediing.jpeg" width={250} height={440} />
              <p>Wedding gifts</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
