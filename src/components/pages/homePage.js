import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid titleBlock">
          <div className="overlay">
            <div className="container">
              <div className="row justify-content-center align-self-center">
                <div className="col-xs-12">
                  <h1>
                    Find your personal style
                  </h1>
                </div>
              </div>
            </div>
          </div>      
        </section>
        <section className="container describeYour">
          <div className="row">
            <div className="col-xs-12 titleSmall">
              <h2>Describe your lifestyle</h2>
            </div>
            <div className="col-md-8 offset-md-2">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>
          </div>
        </section>
        <section className="styleQuiz">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 titleSmall">
                <h2>Style Personality Quiz</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <h4>Natural / Relaxed</h4>
                <p>Your style is Casual, Comfortable, Simple, Approachable, Easy</p>
                <h6>I like to be casual and down to earth, I love comfort and easy to care for clothes.</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <img src={require("assets/img/1AC.png")}  alt="Casual, Comfortable, Simple, Approachable, Easy Everyday Style"/>
              </div>
              <div className="col-xs-12 col-md-6">
                <img src={require("assets/img/2AF.png")}  alt="Casual, Comfortable, Simple, Approachable, Easy Formal Style"/>
              </div>
            </div>
            <div className="row styleExplanation">
              <div className="col-xs-12">
                <p>Feeling comfortable in your clothes is most important to you and your easygoing nature tends towards more casual outfits. Simple lines and designs are your preferred choices over anything too detailed or fussy. In keeping with this carefree attitude you tend to buy only easy, wash and wear garments. You prefer fabrics such as denim, cotton jersey and lightweight knits. Your jewellery choices reflect your minimal look and you tend to wear basic and durable accessories with footwear also focussed on comfort.</p>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <h4>Classic / Traditional</h4>
                <p>Timeless, Professional, Refined, Polished, Sophisticated</p>
                <h6>I am organised and practical and prefer to fill my wardrobe with versatile investment pieces.</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <img src={require("assets/img/3BC.png")}  alt="Timeless, Professional, Refined, Polished, Sophisticated Everyday Style"/>
              </div>
              <div className="col-xs-12 col-md-6">
                <img src={require("assets/img/4BF.png")}  alt="Timeless, Professional, Refined, Polished, Sophisticated Formal Style"/>
              </div>
            </div>
            <div className="row styleExplanation">
              <div className="col-xs-12">
                <p>You are drawn to refined clothing and understated accessories, preferring to invest in quality fabrics and timeless styles rather than jumping on trends. You have a rather formal wardrobe and always look polished and put together. Matching and co-ordinated looks are your preference over those that incorporate bold colours and prints. Your jewellery and accessory choices are not overbearing and are complimentary to your outfits without being the focal point.</p>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <h4>Artistic / Creative</h4>
                <p>Eclectic, Spirited, Unconventional, Whimsical, Unique</p>
                <h6>I am spirited and self expressed and originality is key.</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <img src={require("assets/img/5CC.png")}  alt="Eclectic, Spirited, Unconventional, Whimsical, Unique Everyday Style"/>
              </div>
              <div className="col-xs-12 col-md-6">
                <img src={require("assets/img/6CF.png")}  alt="Eclectic, Spirited, Unconventional, Whimsical, Unique Formal Style"/>
              </div>
            </div>
            <div className="row styleExplanation">
              <div className="col-xs-12">
                <p>You’re way of dressing is innovative and individualistic and you aren’t overly influenced by current trends or traditional rules. You use your clothing choices to reflect your personality, and put together unique and interesting outfits with items purchased from varied sources. Different colours, textures and prints fill your wardrobe and your jewellery collection is bold while your footwear and accessories are usually statement making.</p>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <h4>Dramatic / Edgy</h4>
                <p>Bold, Striking, Strong, Confident, Attention Grabbing</p>
                <h6>I am bold and like to stand out in a crowd and wear striking clothes that make a statement.</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <img src={require("assets/img/7DC.png")}  alt="Bold, Striking, Strong, Confident, Attention Grabbing Everyday Style"/>
              </div>
              <div className="col-xs-12 col-md-6">
                <img src={require("assets/img/8DF.png")}  alt="Bold, Striking, Strong, Confident, Attention Grabbing Formal Style"/>
              </div>
            </div>
            <div className="row styleExplanation">
              <div className="col-xs-12">
                <p>Wearing the latest fashion takes precedence over comfort and you are willing to give most new trends a go. This means your wardrobe consists of many different styles and one off pieces ready to make a statement. Your look is striking and well thought out with added details providing the finishing touch to your look whether it be a bold lip colour or eye catching shoe. You compliment your statement making looks with jewellery and accessories in shiny metal finishes or bold one of a kind wearable art pieces.</p>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <h4>Romantic / Feminine</h4>
                <p>Gentle, Soft, Pretty, Sensitive, Girly</p>
                <h6>I am sensitive, gentle and supportive and love feminine details such as lace, gathers and frills.</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <img src={require("assets/img/9EC.png")}  alt="Gentle, Soft, Pretty, Sensitive, Girly Everyday Style"/>
              </div>
              <div className="col-xs-12 col-md-6">
                <img src={require("assets/img/10EF.png")}  alt="Gentle, Soft, Pretty, Sensitive, Girly Formal Style"/>
              </div>
            </div>
            <div className="row styleExplanation">
              <div className="col-xs-12">
                <p>You have a soft appearance and generally prefer flowing silhouettes and muted colours. Your clothing choices are pretty and you love feminine details such as bows, ruffles, pleats and lace. Even with simpler styles you will most likely choose them in pretty colours or with decorative details and you can never go past a floral print. Your footwear and accessory choices are delicate and minimal with fine necklaces and ballet flats among your staples.</p>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <h4>Alluring / Sexy</h4>
                <p>Magnetic, Emotive, Figure Hugging, Attractive, Flaunting</p>
                <h6>I am magnetic and like attention and I use clothing to highlight my amazing body.</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <img src={require("assets/img/11FC.png")}  alt="Magnetic, Emotive, Figure Hugging, Attractive, Flaunting Everyday Style"/>
              </div>
              <div className="col-xs-12 col-md-6">
                <img src={require("assets/img/12FF.png")}  alt="Magnetic, Emotive, Figure Hugging, Attractive, Flaunting Formal Style"/>
              </div>
            </div>
            <div className="row styleExplanation">
              <div className="col-xs-12">
                <p>You like to make an entrance and favour bold colours and prints to ensure you stand out from the crowd. You are usually showing off your body in figure hugging silhouettes and know how to work a plunging neckline and short hems. You prefer to wear heels whenever you can and make the most of accessorising as another way to add intrigue and flirtation to your look. You likely put a lot of time and effort into personal grooming, always providing your friends with the latest beauty tips.</p>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <h4>Modern / Chic</h4>
                <p>Trendy, Tonal, Basics with Bold Accessories, Contemporary</p>
                <h6>I am cultured and poised and compliment my lifestyle with polished, fashion forward clothing.</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <img src={require("assets/img/13GC.png")}  alt="Trendy, Tonal, Basics with Bold Accessories, Contemporary Everyday Style"/>
              </div>
              <div className="col-xs-12 col-md-6">
                <img src={require("assets/img/14GF.png")}  alt="Trendy, Tonal, Basics with Bold Accessories, Contemporary Formal Style"/>
              </div>
            </div>
            <div className="row styleExplanation">
              <div className="col-xs-12">
                <p>You put time and effort into the way you look and you love accessories, sometimes spending more on bags and shoes than anything else in your wardrobe. You’ve likely experimented with most key styles and while you definitely follow trends you generally shop with care and won’t buy into a trend that doesn’t compliment your existing wardrobe. You tend to avoid bright colours and go for a tone on tone look. Your jewellery choices reflect this minimal approach, either making a statement with a single accessory or balancing a number of more subtle pieces.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row styleQuotes">
              <div className="col-xs-12">
                <h3>“Clothes mean nothing until someone lives in them.” — Marc Jacobs</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
