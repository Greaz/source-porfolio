import React from "react"
import Header from "components/header.jsx"
import Image from "components/image.jsx"
import Footer from "components/footer.jsx"
import Work from "components/work.jsx"

const workItems = [
  {title: 'Rework how to navigate in the website', number: '1', img: 13},
  {title: 'Rework product list and product card', number: '2', img: 14},
  {title: 'Create a page loader full svg', number: '3', img: 15},
];

export class Auchandirect extends React.Component {
  render() {
    return (
        <div>
          <Header>
            <h1>
              <span>Stop Bullshit, start good shit.</span><br /> Allow users to do their food shopping of the month in less than 20 minutes.
            </h1>
          </Header>
          <section className="title-case">
            <h2>Auchan:Direct</h2>
            <div>
              <span className="job-title">May 2016 - Today</span>
              <span className="job-skills">UX, UI, PROTOTYPES, INTERACTIONS, MOTION DESIGN</span>
            </div>
          </section>
          <section className="problem">
            <div>  
              <Image img={9}/>
              <section className="card">
                <h3>The problem</h3>
                <p>
                  On average 100 people a day encounter a password reset error blocking access to their account
                </p>
                <div>=</div>
                <p>
                  « Users do not order anymore, loss of trust in the brand and possibly goes to competitors »
                </p>
              </section>
            </div>
          </section>
          <section className="situation">
            <div>
              <h3>Situation of a reset password usecase</h3>
              <Image img={10} />
            </div>
            <div>
              <section className="card">
                <h5><b>1 :</b> First hypothese of the cause</h5>
                <span>
                  Mobile users are not redirected properly on the reset page, making them unable to finish their action
                </span>
              </section>
              <section className="card">
                <h5><b>2 :</b> Second hypothese of the cause</h5>
                <span>
                  Logging the user automatically after he has reset his password  putting the user's account into a strange status
                </span>
              </section>
            </div>
            <div>
              <section className="quote">
                <q>
                  After analyzing customer contacts on the "password reset" tag, <b>75% of complaints per month correspond to the second hypothesis of cause</b>
                </q>
              </section>
            </div>
            </section>
            <section className="action">
              <div>
                <section className="card">
                  <h3>Action</h3>
                  <p>
                    For fast implementation constraints, we decided to separate the password reset action and the connection reset action.
                  </p>
                  <span>Release date : 19/05/2017</span>
                </section>
              </div>
              <Image img={11}/>
            </section>
            <section className="other-work">
              <div>  
                <Image img={12}/>
                {workItems.map((workItem, index) =>
                  <Work  key={ index } img={ workItem.img } titre={ workItem.title } num={ workItem.number } />
                )}
              </div>
            </section>
            <section className="background-grey">
              <div>
                <h3>Auchan:direct 2016 to now</h3>
                <section>
                    <div><Image img={16} /></div>
                    <div><Image img={17} /></div>
                    <div><Image img={18} /></div>
                </section>
              </div>
            </section>
            <Footer />
        </div>
    );
  }
}
module.exports = Auchandirect;